import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist({ name, tracks }) {
  return (
    <div className={styles.Playlist}>
      <h2 className="Playlist-name">{name}</h2>
      <Tracklist tracks={tracks} />
      <button className={styles.SaveToSpotifyButton}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;