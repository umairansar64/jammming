import React from 'react';
import './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults({ trackData, onAdd }) {
  return (
    <div className="SearchResults">
      <Tracklist tracks={trackData} onAdd={onAdd} isRemovable={false} />
    </div>
  );
}

export default SearchResults;