import React, {useState} from 'react';
import './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';

function App() {
  const addTrack = (trackToAdd) => {
    // Check if the track is already in the playlist
    if (!playlistTracks.find(track => track.id === trackToAdd.id)) {
      setPlaylistTracks(prevTracks => [...prevTracks, trackToAdd]);
    }
  };
  const [playlistName, setPlaylistName] = useState("My Awesome Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 3, name: "Song 3", artist: "Artist 3", album: "Album 3" },
    { id: 4, name: "Song 4", artist: "Artist 4", album: "Album 4" },
    // ... add more tracks as needed ...
  ]);
  const [tracks, setTracks] = useState([
    { id: 1, name: "Song 1", artist: "Artist 1", album: "Album 1" },
    { id: 2, name: "Song 2", artist: "Artist 2", album: "Album 2" },
    // ... add more tracks as needed ...
  ]);

  return (
    <div className="App">
      <SearchBar />
      <SearchResults trackData={tracks} onAdd={addTrack} />
      <Playlist name={playlistName} tracks={playlistTracks} />
      {/* And other components as needed */}
    </div>
  );
}

export default App;