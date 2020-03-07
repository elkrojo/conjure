# Conjure - A personal music collection database and playlist generator

Project 3 - Data Centric Development (Code Institute 2020)        

If you are searching for a way to catalogue your collection of rare vinyl, look no further!     

**Conjure** has been designed for true music lovers who want to take advantage of category filtering and playlist generating features found in modern digital music apps.       

Our search engine will do all the hard work, leaving you free to simply *enjoy the music...*


## Demo
Clicking on the screen below will bring you to a live demo. Right click and select "Open link in new tab" to open the demo in a new browser tab.      

[![Main](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/main_screen.png)](https://elkrojo.github.io/place-in-time/)

## UX
As a vinyl music lover, I would like to create a digital representation of my music collection. 
In doing so, I will be able to filter songs using many available categories or generate a playlist depending on my current mood.       

As a DJ, I would like to create a digital database representing my record collection. 
In doing so, I will be able to quickly find tracks that fit a category of my choosing, and even see which tracks would work well together by generating a playlist.

![UX Stories](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/ux-stroy.gif "UX Stories")

### Strategy
The design is intuitive and easy to grasp. The options are clearly laid out, and tracklist results are easily readable.

### Scope
Music lovers and DJs with a desire to easily navigate their extensive collections can filter results or generate a playlist dependant on various parameters.

### Structure 
The end point of every search is a track table displaying tracks which match the search parameters. Clear content separation was implemented throughout the site, allowing
the user to easily focus on the relevant information being presented. All user options are clearly visable.

### Skeleton
[Wireframe](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/PiT_wireframe.jpeg)      

### Surface
The cool color palette was chosen to be soothing on the eye and allow for extended viewing periods. Menu options and hover effects are modelled on the physical backlit buttons found
on vintage hifi and professional audio gear. The background image echoes the same tones found in the styling color palette.

## Features
 
### Existing Features

**Main Menu** - presents users with the main filtering categories, as well as the Add Track & Conjure Playlist options.     

![Modal](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/modal_hlite.png "Modal")


**Artists List** - shows users the artists who curently have tracks in the database. This list can be filtered alphabetically using the index located above the artist tiles.      

![Modal](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/gmap_hlite.png "Map")


**Artist Page** - presents users with an image banner for the selected artist, beneath which can be found a tracklist displaying all the tracks attributed to the currently selected artist in the database.        

![Modal](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/gmap_markers_hlite.png "Map Markers")


**Edit Track Page** - by clicking the edit track button on the tracklist  users can update information relative to the selected track. Users can also delete an entry from this location. 
Genre style list is generated dependant on genre selected.      

![Modal](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/accordion_cl_hlite.png "Accordion Closed")
![Modal](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/accordion_op_hlite.png "Accordion Open")      


**Genre Filter** - presents the user with a choice of broad genre categories. Upon clicking a genre category option, the user is presented with a genre style menu relative to each genre.

![Modal](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/footer_hlite.png "Footer")        


**Mood Filter** - allows users to filter songs based on their current mood.       

![Modal](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/footer_hlite.png "Footer")        


**BPM & Year Filters** - give users the option of selecting a range within which to return results based on a lower and upper limit.       

![Modal](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/footer_hlite.png "Footer")        


**Country Filter** - offers the user a way of narrowing their track selection, based on a particular location.      

![Modal](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/footer_hlite.png "Footer")        


**Add Track** - this is where a new track can be added to the database. Genre style list is generated dependant on genre selected.      

![Modal](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/footer_hlite.png "Footer")        


**Conjure Playlist** - this feature uses a combination of filtering options, and returns a selection of songs that match the request.     

![Modal](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/footer_hlite.png "Footer")        


The JQuery function that sets the genre style list can be found at file path:

    static/js/main.js
   
### Features Left to Implement

**Global Search** - would allow users to search the entire database for an artist or a track via a search bar.       

**Stashed Playlists** - would allow users to save their favorite playlists for future use.     

**Upload Artist Picture** - would allow the user to add their own artist image.      

**Multiple Track Upload** - would allow users to upload a large number of tracks at once using a csv file template.     

## Technologies Used
[Python3](https://www.python.org/) - The project uses **Python3** to build the website routes and process the data.       

[Flask](https://flask.palletsprojects.com/en/1.1.x/) - The project uses **Flask** as the web application framework.     

[PyMongo](https://api.mongodb.com/python/current/) - The project uses **PyMongo** to access and manipulate MongoDB.     

[JavaScript](https://en.wikipedia.org/wiki/JavaScript) - The project uses **JavaScript** to add dynamic functionality to the user experience.

[HTML5](https://en.wikipedia.org/wiki/HTML5) - The project uses **HTML5** to structure the page contents.     

[CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - The project uses **CSS3** to style the HTML elements.                    

[JQuery](https://jquery.com) - The project uses **JQuery** to simplify DOM manipulation.       


## Testing
The user story scenarios were adressed effectively, where information relative to the selected marker was presented clearly and cleanly. 
The map section alerts the user to their current location, while providing them with clickable options in the form of map markers. 
The page elements will resize and reflow when the screen size is reduced or increased.        

**Welcome Modal:**
1. Click on the "Find my location" button and verify that the map updates with markers located nearby.   

**Map:**
1. Try to resize the browser window on a desktop device, verify that the map aligns with the text content below when the window width exceeds 768 pixels.       

**Map Markers:**
1. Try to refresh the page, verify that the map markers are set relative to your current location.
2. Try to click on a marker cluster, verify that the map zooms in on the cluster and shows the independant markers within.
3. Click on a map marker and verify that the "Place of interest" and "Overview" sections are updated for each marker clicked.

**Accordion:**
1. Try selecting a map marker without history content, verify that the appropriate button message is displayed and the button is made inactive.
2. Try selecting a map marker with history content, verify that the appropriate button message is updated with the relevant suggested action, and the button is made active.
3. Try to access the history paragraphs by clicking on the "Tap here to show history" message, verify that the accordion expands, the history is displayed, 
    and the button message is updated with the relevant suggested action.
4. Try to close the history paragraphs by clicking on the "Hide history" message, verify that the accordion retracts, the history is hidden, 
    and the button message is updated with the relevant suggested action.
5. Try to access a new location by clicking on a map marker while the accordion is open, verify that the accordion remains open between locations, 
    the page content is updated correctly, and the button message remains relative to the current accordion state.

**Responsive Footer:**
1. Try to scroll through a history section which extends at least 500 pixels beyond the viewport height, verify that the footer slides up from the bottom 
    and displays the relevant suggested action.
2. Try to return to the top of the page by clicking the footer, verify that the page scrolls to the top and the footer slides back down to a hidden position.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.        

### Browser Compatibility       

The site was tested on multiple browsers (Chrome, Firefox, Safari) and on a few portable devices (iPhone 5s: Safari, iPad: Safari) to assess compatibility and responsiveness. 

**!Known Issues!**      

Sometimes the map markers are not loaded initially where the browser does not yet have permission to access the device location. Refreshing the page and clicking on the modal button "Find my location" will resolve this issue.       

While testing, I encountered an issue when trying to view the page in Firefox while the developer tools window is open. As a result, none of the dynamic page content is loaded. 
Closing the developer tools window and refreshing the page causes the page to load as intended. This appears to be a known issue between Firefox developer tools and Google Maps JavaScript API, specifically.      

While testing, users accessing the site via Chromium encountered an issue where the dynamic content was not loaded, and refreshing the page didn't work.

## Deployment

The site is hosted through GitHub pages and is synced to the master branch of the repository. 
This means that the latest push to the master branch will update the live site automatically.       

The process for initial deployment is as follows -      
1. On the repository GitHub page, click the settings tab located on the far right of the menu.     
2. Scroll down to the section titled GitHub Pages and select "master branch" as the source.        
3. The site deploys once a source is selected and a url link is accessible below the GitHib Pages section title.       

To run the code in this project locally, you can clone the full contents of the repository. In your terminal, 
navigate to the directory you want the repository located and enter the following command:
 
    git clone https://github.com/elkrojo/place-in-time.git

Once cloned, you can remove all connection to the source repository using the command:

    git remote rm origin


## Credits

### Map
The interactive map used in this site is supplied by Google, accessed by interfacing with the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial).

### Content
The text content of the "Overview" paragraph is taken from the wikipedia page for that location, 
accessed by requesting the summary content using the [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/#/Page%20content/get_page_summary__title_) for the selected location.      

The text content of the "Show history" paragraphs is taken from the wikipedia page for that location,
accessed by using JQuery to target the necessary html elements returned from a call to the [English Wikipedia API](https://en.wikipedia.org/w/api.php) for the selected location.     

### Acknowledgements

The regular expressions used to remove some of the html elements in the parseContents function were copied from a post on Stack Overflow which addressed the same specific subject.



https://www.htmlgoodies.com/beyond/css/css-ref/building-responsive-web-page-headers.html

https://www.w3schools.com/howto/howto_css_responsive_form.asp

https://sites.tufts.edu/eeseniordesignhandbook/2015/music-mood-classification/

https://www.color-hex.com/

https://stackoverflow.com/questions/27416296/how-to-push-a-csv-data-to-mongodb-using-python

https://stackoverflow.com/questions/19898283/folder-and-files-upload-with-flask

https://www.quora.com/How-can-I-import-a-CSV-file-data-to-MongoDB-using-Python-Flask?share=1