import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId 
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
    return render_template("artists.html", artists=mongo.db.artists.find())


@app.route('/artist_page/<artist_name>')
def artist_page(artist_name):
    tracks = mongo.db.tracks
    return render_template("artist_page.html",
                           tracks=tracks.find({"artist": artist_name}))


@app.route('/track_page/<track_id>')
def track_page(track_id):
    return render_template("track_page.html",
                           )


@app.route('/get_genres')
def get_genres():
    return render_template("genres.html")


@app.route('/get_moods')
def get_moods():
    return render_template("moods.html")


@app.route('/get_bpm')
def get_bpm():
    return render_template("bpm.html")


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