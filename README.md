# Jammming - Spotify Playlist Creator

Jammming is a sophisticated React web application that interacts with the Spotify Web API, allowing users to search, create, modify, and save playlists to their Spotify account.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Install & Run](#how-to-install--run)
- [Usage](#usage)
- [Limitations](#limitations)
- [Future Work](#future-work)
- [Contributors](#contributors)
- [License](#license)

## Features
- **Search Spotify Library**: Find your favorite songs, albums, and artists.
- **Custom Playlist Creation**: Add and remove tracks to curate the perfect playlist.
- **Modify Playlist Title**: Personalize your playlist by giving it a custom name.
- **Save to Spotify Account**: Export your custom playlist directly to your Spotify account.

## Technologies Used
- [React.js](https://reactjs.org/): For developing the user interface.
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/): To search the Spotify library and save playlists to user's account.
- [CSS](https://www.w3.org/Style/CSS/): For styling the web application.
- [HTML](https://www.w3.org/html/): For structuring the web application.

## How to Install & Run

1. Clone the repository to your local machine.
   ```shell
   git clone <repository-url>

2. Navigate to the project directory.
   ```shell
   cd <project-directory>
3. Install the project dependencies.
   ```shell
   npm install
4. Start the development server.
   ```shell
   npm start
5. Open your web browser and go to http://localhost:3000.

## Usage

- Log in using your Spotify account credentials.
- Search for songs using the search bar.
- View search results and select songs to add to your custom playlist.
- Remove any song from your custom playlist if needed.
- Rename your custom playlist.
- Save the playlist to your Spotify account.

## Limitations

- The Spotify access token has a validity of 1 hour, necessitating re-login upon expiration.

## Future Work

- Extend user sessions by implementing refresh token logic.
- Enhance UI/UX for more intuitive navigation and interaction.
- Incorporate additional features like viewing and editing existing playlists.

## Contributors

- [Mohammad Umair Ansar](https://github.com/umairansar64)
