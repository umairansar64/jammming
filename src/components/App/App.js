import React from 'react';
import './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <Playlist />
      {/* And other components as needed */}
    </div>
  );
}

export default App;