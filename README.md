# Conjure - A personal music collection database and playlist generator

Project 3 - Data Centric Development (Code Institute 2020)        

If you are searching for a way to catalogue your collection of rare vinyl, look no further!     

**Conjure** has been designed for true music lovers who want to take advantage of category filtering and playlist generating features found in modern digital music apps.       

Our search engine will do all the hard work, leaving you free to simply *enjoy the music...*

<br>

---

## Table of Contents

1. [Demo](#demo)
2. [UX](#ux)
3. [Features](#features)
4. [Information Architecture](#information-architecture)
5. [Technologies Used](#technologies-used)
6. [Testing](#testing)
7. [Deployment](#deployment)
8. [Credits](#credits)

<br>

---

## Demo
Clicking on the image below will bring you to a live demo. Right click and select "Open link in new tab" to open the demo in a new browser tab.      

[![Main](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/demo-image.png)](https://conjure-music.herokuapp.com/)

<br>

[Back to Top](#table-of-contents)

---

## UX
As a vinyl music lover, I would like to create a digital representation of my music collection. 
In doing so, I will be able to filter songs using many available categories or generate a playlist depending on my current mood.       

As a DJ, I would like to create a digital database representing my record collection. 
In doing so, I will be able to quickly find tracks that fit a category of my choosing, and even see which tracks would work well together by generating a playlist.


### Strategy
The design is intuitive and easy to grasp. The options are clearly laid out, and tracklist results are easily readable.

### Scope
Music lovers and DJs with a desire to easily navigate their extensive collections can filter results or generate a playlist dependant on various parameters.

### Structure 
The end point of every search is a track table displaying tracks which match the search parameters. Clear content separation was implemented throughout the site, allowing
the user to easily focus on the relevant information being presented. All user options are clearly visable.

### Skeleton
[Desktop Wireframe](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/conjure-desktop.jpeg)      
[Mobile Wireframe](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/conjure-mobile.jpeg)

### Surface
The cool color palette was chosen to be soothing on the eye and allow for extended viewing periods. Menu options and hover effects are modelled on the physical backlit buttons found
on vintage hifi and professional audio gear. The background image shows a close-up shot of a vinyl record and echoes the same tones found in the styling color palette.

<br>

[Back to Top](#table-of-contents)

---

## Features
 
### Existing Features

**Main Menu** - presents users with the main filtering categories, as well as the Add Track & Conjure Playlist options.     

![Main Menu](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/main-menu.png "Main Menu")     


**Artists List** - shows users the artists who curently have tracks in the database. This list can be filtered alphabetically using the index located above the artist tiles.      

![Artists List](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/artists-list.png "Artists List")        


**Artist Page** - presents users with an image banner for the selected artist, beneath which can be found a tracklist displaying all the tracks attributed to the currently selected artist in the database.        

![Artist Page](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/artist-page.png "Artist Page")       


**Edit Track Page** - by clicking the edit track button on the tracklist  users can update information relative to the selected track. Users can also delete an entry from this location. 
Selection options for style are generated dependant on genre selected.      

![Edit Track](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/edit-track-page.png "Edit Track")      


**Genre Filter** - presents the user with a choice of broad genre categories. Upon clicking a genre category option, the user is presented with a genre style menu relative to each genre. 
The genre categories are the same genre categories found in [Discogs](https://www.discogs.com/). The selectable style categories are the top 10 most featured styles per genre in Discogs.

![Genre Filter](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/genre-filter.png "Genre Filter")        
![Style Filter](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/style-filter.png "Style Filter")        

**Mood Filter** - allows users to filter songs based on their current mood. The mood categories are based on acoustical analysis research conducted by Michael Nuzzolo. For more informration: [Music Mood Classification](https://sites.tufts.edu/eeseniordesignhandbook/2015/music-mood-classification/)       

![Mood Filter](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/mood-filter.png "Mood Filter")        


**BPM & Year Filters** - give users the option of selecting a range within which to return results based on a lower and upper limit.       

![BPM Filter](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/bpm-filter.png "BPM Filter") ![Year Filter](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/year-filter.png "Year Filter")

**Country Filter** - offers the user a way of narrowing their track selection, based on a particular location.      

![Country Filter](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/country-filter.png "Country Filter")        


**Add Track** - this is where a new track can be added to the database. Genre style list is generated dependant on genre selected.      

![Add Track](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/add-track.png "Add Track")        


**Conjure Playlist** - this feature uses a combination of filtering options, and returns a selection of songs that match the request.     

![Conjure Playlist](https://raw.githubusercontent.com/elkrojo/conjure/master/static/images/docu/conjure-playlist.png "Conjure Playlist")        


The JQuery function that sets the genre style list can be found at file path:

    static/js/main.js
   
### Features Left to Implement

**Global Search** - would allow users to search the entire database for an artist or a track via a search bar.       

**Stashed Playlists** - would allow users to save their favorite playlists for future use.     

**Upload Artist Picture** - would allow the user to add their own artist image.      

**Multiple Track Upload** - would allow users to upload a large number of tracks at once using a csv file template.     

**More Countries** - would allow the user to select any country in the world.       

**More Styles** - would allow theuser to customise the list of styles available relevant to their personal record collection.       

**BPM Counter Button** - would allow the user to derive an approximate bpm when clicking a button repeatedly in time with a song.

**User Account** - would allow the user private access to their collection.

<br>

[Back to Top](#table-of-contents)

---

## Information Architecture
### Database
[MongoDB](https://www.mongodb.com) - The database chosen for this project is **MongoDB**, a non-relational database.

### Data Types
**- ObjectId:**  &nbsp;&nbsp; A unique identifier for each inserted document in the database.       
**- String:**  &nbsp;&nbsp; The MongoDB default datatype for fields within each document object.        
**- Int32:**  &nbsp;&nbsp; The MongoDB default integer type.        

### Data Structure
**conjure.artists**
| Key | Data Type |
--- | ---
_id | ObjectId
image_path | String
<br>

**conjure.countries**
| Key | Data Type |
--- | ---
_id | ObjectId
country | String
<br>

**conjure.genre**
| Key | Data Type |
--- | ---
_id | ObjectId
genre_name | String
genre_style | Array
<br>

**conjure.moods**
| Key | Data Type |
--- | ---
_id | ObjectId
mood | String
<br>

**conjure.tracks**
| Key | Data Type |
--- | ---
_id | ObjectId
artist_name | String
track_name | String
album_ep_name | String
genre_name | String
genre_style | String
mood | String
year | Int32
country | String
bpm | Int32
minutes | Int32
seconds | Int32

<br>

[Back to Top](#table-of-contents)

---

## Technologies Used
[Python3](https://www.python.org/) - The project uses **Python3** to build the website routes and process the data.       

[Flask](https://flask.palletsprojects.com/en/1.1.x/) - The project uses **Flask** as the web application framework.     

[PyMongo](https://api.mongodb.com/python/current/) - The project uses the **PyMongo** python library to communicate with MongoDB.     

[JavaScript](https://en.wikipedia.org/wiki/JavaScript) - The project uses **JavaScript** to add dynamic functionality to the user experience.

[HTML5](https://en.wikipedia.org/wiki/HTML5) - The project uses **HTML5** to structure the page contents.     

[CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - The project uses **CSS3** to style the HTML elements.                    

[JQuery](https://jquery.com) - The project uses **JQuery** to simplify DOM manipulation.       

[GitHub](https://github.com) - The project uses **GitHub** as a version control repository.

[Heroku](https://www.heroku.com) - The project uses  **Heroku** to host and serve the application.

<br>

[Back to Top](#table-of-contents)

---

## Testing
The user story scenarios were adressed effectively, where tracks can be added, filtered, read, updated and deleted according to the user's requirements. 
The main menu section gives the users clear options, which invites interactivity to filter track results. 
The page sections will resize and reflow when the screen size is reduced or increased.      

**Header Logo**
1. Click on the header logo. Verify that you are returned to the welcome screen, no matter where you are on teh site.
2. Hover over the logo with the mouse. Verify that a playful animation affects the logo. 

**Main Menu:**
1. Click on all menu items and verify that the page updates to show the relevant filtering options.     

**Artist List:**
1. Click on an index letter and verify that the artist list updates to show only artists beginning with that letter.
2. If there are no results found, verify that the page updates to show a message to communicate this information.  
3. Click on an artist tile and verify that the page updates to show the relevant artist page with header at the top and tracklist below.        

**Artist Page:**
1. Click on the edit track icon in the track table and verify that the page updates to show the track information with update and delete options at the bottom.

**Edit Track Form:**
1. Try to change the track details and click update. Verify that the page updates to show you the relevant artists track table.
2. Try to select a different genre. Verify that the style list updates to show the styles relevant to each genre selected.
3. try to omit a form field and update entry. Verify that the browser alerts you to the missing details and does not allow you to submit an update without completing all fields.

**Genre Filter:**
1. Click on a broad genre category and verify that the page updates to show the genre style options within that category.
2. Click on a genre style option and verify that a track table is generated showing only tracks in that genre style group. 
3. If there are no results found, verify that the page updates to show a message to communicate this information. 

**Mood Filter:**
1. Click on a mood option. Verify that the page updates to show tracks in the relevant mood category.
2. If there are no results found, verify that the page updates to show a message to communicate this information. 

**BPM Filter & Year Filter:**
1. Select a lower range limit, an upper range limit and click the search button. Verify that the page updates to show a track table with tracks within that range.
2. If there are no results found, verify that the page updates to show a message to communicate this information.

**Country Filter:**
1. Click on a country option. Verify that th epage updates to show a track table populated with tracks relevant to teh country selected.
2. If there are no results found, verify that the page updates to show a message to communicate this information. 

**Add Track:**
1. Try to enter a new track into the database by filling all fields and clicking insert track. Verify that the page updates to show you the artist page relevant to the artist you entered. 
2. Try to select a different genre. Verify that the style list updates to show the styles relevant to each genre selected.
3. Try omitting a form field and inserting a track. Verify that the browser alerts you to the missing details and does not allow you to insert a track without completing all fields.
4. If the artist was not already in the database, verify that the artist list is updated to show the new artist.

**Conjure Playlist:**
1. Try to generate a playlist by filling in all form fields and clicking on "Conjure a playlist" button. Verify that the page updates to display a track table showing only tracks within the parameters selected.
2. Try to enter a different genre. Verify that the style list updates to show the styles relevant to each genre selected.
3. Try omitting a form field and generating a playlist. Verify that the browser alerts you to the missing details and does not allow you to generate a playlist without completing all fields.
4. Try to select a different number of tracks. Verify that the tracklist shows no more than the track limit.
5. Try generating multiple playlists with the exact same parameters. Verify the results are not always identical.
6. If there are no results found, verify that the page updates to show a message to communicate this information.
      

### Browser Compatibility       

The site was tested on multiple browsers (Chrome, Firefox, Safari) and on a few portable devices (iPhone 5s: Safari, iPad: Safari) to assess compatibility and responsiveness.      

<br>

[Back to Top](#table-of-contents)

---

## Deployment

The site is hosted through Heroku and is synced to the master branch of the Git repository. 
This means that the latest push to the heroku branch will update the live site automatically.       

The process for initial deployment is as follows -      
1. Log into Heroku dashboard and select "Create new app" from teh dropdown menu located on the top right.     
2. Enter a name for the app, select a region where you would like your app to be hosted & click the "Create app" button.        
3. In the app dashboard, click on settings. Under "Config Vars", click "Reveal Config Vars".
4. Set the following according to your local variables:
    | Var | Value |
    --- | ---
    IP | 0.0.0.0
    PORT | 5000
    [YOUR CONX VAR] | mongodb+srv://root:[YOUR PASSWORD]@myfirstcluster-t99h4.mongodb.net/[YOUR COLLECTION NAME]?retryWrites=true&w=majority
    [YOUR DB VAR] | [YOUR COLLECTION NAME]
5. In your local terminal: `$ heroku login -i`
6. Once you are logged in, create a requirements file `$ pip3 freeze -- local > requirements.txt`
7. Let heroku know your app location by making a Procfile `echo web: python app.py > Procfile`
8. Back in the terminal, set your heroku app as a git remote `$ heroku git:remote -a <app_name>`
9. Type `$ heroku ps:scale web=1` into the terminal.
10. Go back to Heroku, and at `Settings` copy `https://<app_name>.herokuapp.com/` 
11. Link your git master to the heroku remote `git remote add http://<app_name>.herokuapp.com/`
12. Type `git push -u heroku master`
13. Once the build is complete, go back to Heroku and click on `Open App`
         

To run the code in this project locally, you can clone the full contents of the repository. In your terminal, 
navigate to the directory you want the repository located and enter the following command:
 
    git clone https://github.com/elkrojo/conjure.git

Once cloned, you can remove all connection to the source repository using the command:

    git remote rm origin

before you can run the project locally, you will first need to install the packages for the environment to access.

1. `pip3 install flask`
2. `pip3 install flask-pymongo`
3. `pip3 install dnspython`

This app has been developed using private keys to access the database. To run this project locally, create your own mongo database and link to it using your own URI connection.

<br>

[Back to Top](#table-of-contents)

---

## Credits

### Media
The background image used throughout the site was obtained from wallpaperflare.

### Acknowledgements
Special thanks to my project mentor, Aaron. His critical eye and accommodating manner have steered me clear of many rocks. Cheers, man!       

Thanks to all the music makers everywhere, past and present, without which this project idea would never have come to light.        

All content is intended **for educational use only**.

<br>

[Back to Top](#table-of-contents)

---
