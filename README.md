# Skill-Based Assessment 320

Welcome to SpotiLite, a simpler, more compacted, and less confusing (as if Spotify is confusing) way to use Spotify.

## How It Works

This is a Vite@React application created using the Spotify API to give a lighter and more compacted experience of Spotify.

The site is currently incomplete but it is functional in obtaining Spotify credentials and extracting data within Spotify via API calls. 

To use the site, the user has to login via the login button on the top right of the site in order to use the site because once logged in, the user will receive a Token that will be stored inside the browser local storage which will allows authentications for API requests.

The styling of this website is primarily with Tailwindcss and some components are gathered from the MaterialTailwindCSS modules installed.

## Functionalities
There are currently 3 working API calls. 
> 1. Search Bar which ultilizes the api.spotify.com/v1/search request
> 2. The quick playlist buttons, which ultizes the api.spotify.com/v1/playlists where I've declared a constant object that contains the playlist IDs for this request
> 3. The profile page which ultizes the api.spotify.com/v1/me request to obtain general information about the logged user. 

These API requests need the Token which is obtained by loggin in through the Spotify portal

There are bugs presented where navigating to other Routes may lead to the website breaking so I've commented out a lot of functionalities where this happens especially when navigating to the /profile route.

The music player is currently not implemented until I fix all presented bug in term of losing access to data when navigating routes.

## How to use
> **INSTALLATION**
> 1. Fork the following project or download it as a .zip onto your local machine
> 2. cd into the folder
> 3. run the command **npm run dev** to start the local server
> 4. You are good to go!



