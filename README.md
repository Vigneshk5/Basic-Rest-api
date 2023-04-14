<!-- @format -->

# Node REST API Project

This is a Node.js RESTful API project that supports two routes: `/outfits` and `/comment`. The `/outfits` route returns a `GET` response, and the `/comment` route returns a `POST` response.

## Installation

1.  Clone the repository
2.  Install dependencies with `npm install`

## Usage

### Start server

To start the server, run `npm start`. The server will start listening on port `3000`.

## Routes

### GET `/outfits`

This route returns a JSON response of all available outfits and colours.

### POST `/comment`

This route expects a JSON payload with the following properties:

{
"content": "This outfit is awesome!"
}
