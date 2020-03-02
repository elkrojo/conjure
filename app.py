import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from py_functions import lower_dict_attr
if os.path.exists("env.py"):
    import env


app = Flask(__name__)
app.config["MONGO_DBNAME"] = os.environ.get('MONGODB_NAME')
app.config["MONGO_URI"] = os.environ.get('MONGODB_CONX')

mongo = PyMongo(app)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/about')
def about():
    return render_template("about.html")


@app.route('/contact')
def contact():
    return render_template("contact.html")


@app.route('/get_artists')
def get_artists():
    artists = mongo.db.artists.find().sort("artist_name", 1)
    return render_template("artists.html", artists=artists)


@app.route('/artist_page/<artist_id>/<artist_name>')
def artist_page(artist_id, artist_name):
    tracks = mongo.db.tracks.find({"artist_name": artist_name}).sort("track_name", 1)
    artist = mongo.db.artists.find_one({'_id': ObjectId(artist_id)})

    if "image_path" in artist.keys():
        artist_image = artist["image_path"]
    else:
        artist_image = "https://via.placeholder.com/720x348.png?text=Placeholder+Image"

    return render_template("artist_page.html",
                           tracks=tracks,
                           artist_name=artist_name,
                           artist_image=artist_image)


@app.route('/edit_track/<track_id>')
def edit_track(track_id):
    track = mongo.db.tracks.find_one({'_id': ObjectId(track_id)})
    genres = mongo.db.genre.find()
    track_genre = mongo.db.genre.find_one({"genre_name": track["genre_name"]})
    track_styles = track_genre["genre_style"]
    moods = mongo.db.moods.find()
    countries = mongo.db.countries.find()
    return render_template("edit_track.html",
                           track=track,
                           genres=genres,
                           track_styles=track_styles,
                           moods=moods,
                           countries=countries)


@app.route('/update_track/<artist_name>/<track_id>', methods=["POST"])
def update_track(track_id, artist_name):
    tracks = mongo.db.tracks
    track = tracks.find_one({'_id': ObjectId(track_id)})
    artist = mongo.db.artists.find_one({"artist_name": track["artist_name"]})
    artist_id = artist["_id"]
    tracks.update({'_id': ObjectId(track_id)},
                  {
                    'artist_name': request.form.get('artist_name').lower(),
                    'track_name': request.form.get('track_name').lower(),
                    'album_ep_name': request.form.get('album_ep_name').lower(),
                    'genre_name': request.form.get('genre_name').lower(),
                    'genre_style': request.form.get('genre_style').lower(),
                    'mood': request.form.get('mood').lower(),
                    'year': request.form.get('year'),
                    'country': request.form.get('country'),
                    'bpm': request.form.get('bpm'),
                    'length': request.form.get('length')
                    })

    return redirect(url_for('artist_page', artist_id=artist_id, artist_name=artist_name))


@app.route('/delete_track/<artist_name>/<track_id>')
def delete_track(track_id, artist_name):
    tracks = mongo.db.tracks
    track = tracks.find_one({'_id': ObjectId(track_id)})
    artist = mongo.db.artists.find_one({"artist_name": track["artist_name"]})
    artist_id = artist["_id"]
    mongo.db.tracks.remove({'_id': ObjectId(track_id)})
    return redirect(url_for('artist_page', artist_id=artist_id, artist_name=artist_name))


@app.route('/add_track')
def add_track():
    genres = mongo.db.genre.find()
    moods = mongo.db.moods.find()
    countries = mongo.db.countries.find()
    return render_template("add_track.html", genres=genres, moods=moods, countries=countries)


@app.route('/insert_track', methods=["POST"])
def insert_track():
    artists = mongo.db.artists
    unique_artists = artists.distinct("artist_name")
    tracks = mongo.db.tracks
    dict_form = request.form.to_dict()
    dict_form_lower = lower_dict_attr(dict_form)
    _trkid = tracks.insert_one(dict_form_lower)
    track = tracks.find_one({'_id': ObjectId(_trkid.inserted_id)})

    _artid = None
    if track['artist_name'] not in unique_artists:
        _artid = artists.insert_one({'artist_name': track['artist_name']})
        _artid = _artid.inserted_id
    else:
        _artid = artists.find_one({'artist_name': track['artist_name']})
        _artid = _artid["_id"]

    artist_id = _artid

    return redirect(url_for('artist_page', artist_id=artist_id,
                            artist_name=track['artist_name']))


@app.route('/get_genres')
def get_genres():
    genres = mongo.db.genre.find().sort("genre_name", 1)
    return render_template("genres.html", genres=genres)


@app.route('/genre_page/<genre_id>/<genre_name>')
def genre_page(genre_id, genre_name):
    genre = mongo.db.genre.find_one({"_id": ObjectId(genre_id)})
    styles = genre["genre_style"]
    return render_template("genre_page.html", genre_name=genre_name.replace("_", " "), styles=styles)


@app.route('/style_page/<genre_style>')
def style_page(genre_style):
    tracks = mongo.db.tracks.find({"genre_style": genre_style})
    return render_template("style_page.html", tracks=tracks, genre_style=genre_style)

@app.route('/get_moods')
def get_moods():
    moods = mongo.db.moods.find().sort("mood", 1)
    return render_template("moods.html", moods=moods)


@app.route('/mood_page/<mood_id>/<mood_name>')
def mood_page(mood_id, mood_name):
    mood = mongo.db.moods.find_one({'_id': ObjectId(mood_id)})
    tracks = mongo.db.tracks.find({"mood": mood["mood"]})
    return render_template("mood_page.html", tracks=tracks, mood_name=mood_name)


@app.route('/get_bpm')
def get_bpm():
    return render_template("bpm.html")


@app.route('/search_bpm', methods=["POST"])
def search_bpm():
    dict_form = request.form.to_dict()
    lower_limit = dict_form["lower_limit"]
    upper_limit = dict_form["upper_limit"]
    return redirect(url_for('bpm_page', lower_limit=lower_limit, upper_limit=upper_limit))


@app.route('/bpm_page/<lower_limit>/<upper_limit>')
def bpm_page(lower_limit, upper_limit):
    tracks = mongo.db.tracks.find({"bpm": {"$gt": lower_limit, "$lt": upper_limit}})
    print(tracks)
    return render_template("bpm_page.html", lower_limit=lower_limit, upper_limit=upper_limit, tracks=tracks)


@app.route('/get_year')
def get_year():
    return render_template("year.html")


@app.route('/get_country')
def get_country():
    return render_template("country.html")


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
