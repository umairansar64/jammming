import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults({ trackData, onAdd }) {
  return (
    <div className={styles.SearchResults}>
      <Tracklist tracks={trackData} onAdd={onAdd} isRemovable={false} />
    </div>
  );
}

export default SearchResults;