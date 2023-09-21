import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist({ name, tracks, onRemove, onNameChange, onSave }) {
  return (
    <div className={styles.Playlist}>
      <p>Rename Your Playlist here:</p>
      <input 
        type="text" 
        className="Playlist-name" 
        value={name} 
        onChange={onNameChange}
      />
      <h2 className="Playlist-name">{name}</h2>
      <Tracklist tracks={tracks} onRemove={onRemove} isRemovable={true} />
      <button className={styles.SaveToSpotifyButton} onClick={onSave}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;