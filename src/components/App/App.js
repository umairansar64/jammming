import React, {useState} from 'react';
import './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../Spotify/Spotify';
import styles from './App.module.css';

function App() {
  const addTrack = (trackToAdd) => {
    // Check if the track is already in the playlist
    if (!playlistTracks.find(track => track.id === trackToAdd.id)) {
      setPlaylistTracks(prevTracks => [...prevTracks, trackToAdd]);
    }
  };

  const removeTrack = (trackToRemove) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(track => track.id !== trackToRemove.id));
  };

  const [playlistName, setPlaylistName] = useState("My Personal Playlist");

  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 3, name: "Asan Nahi Yahan", artist: "Arijit Singh", album: "Aashiqui 2" },
    { id: 4, name: "Hai Dil Yeh Mera", artist: "Arijit Singh", album: "Heartless" },
    // ... add more tracks as needed ...
  ]);

  const [tracks, setTracks] = useState([
    { id: 1, name:"Chahun main ya na", artist: "Arijit Singh", album: "Aashiqui 2" },
    { id: 2, name: "Sunn Raha Hai Na Tu", artist: "Ankit Tiwari", album: "Aashiqui 2" },
    // ... add more tracks as needed ...
  ]);

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  // const mockUris = [
  //   'spotify:track:1dfeR4HaWDbWqFHLkxsg1d',
  //   'spotify:track:2YarjDYjBJuH63dUIh9OWv',
  //   // add more URIs as needed for testing...
  // ];

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);

    if (!trackUris.length) {
        return; // Do not proceed if there are no tracks in the playlist
    }

    Spotify.getUserId()
      .then(userId => {
          return Spotify.createPlaylist(userId, playlistName)
              .then(playlistId => {
                  return { userId, playlistId };
              });
      })
      .then(({ userId, playlistId }) => {
          return Spotify.addTracksToPlaylist(userId, playlistId, trackUris);
      })
      .then(snapshotId => {
          console.log('Playlist saved with snapshot ID: ', snapshotId);
          
          // Reset playlist name and tracks (can be modified if needed)
          setPlaylistName('New Playlist');
          setPlaylistTracks([]);
      })
      .catch(error => {
          console.error('Error saving playlist:', error);
      });
  }

  const updateSearchResults = (results) => {
    setTracks(results);
  };

  return (
    <div className="App">
      <h1 className={styles.MainHeading}>Jammming</h1>
      <div className={styles.SearchStyles}>
        <SearchBar onSearch={updateSearchResults} />
        <SearchResults
        trackData={tracks} 
        onAdd={addTrack} />
      </div>
      <Playlist 
        name={playlistName} 
        tracks={playlistTracks} 
        onRemove={removeTrack} 
        onNameChange={handlePlaylistNameChange}
        onSave={savePlaylist}
      />
    </div>
  );
}

export default App;