import React from 'react';
import './Tracklist.module.css';
import Track from '../Track/Track';

function Tracklist({ tracks, onAdd, isRemovable, onRemove }) {

  return (
    <div className="Tracklist">
      {tracks.map(track => 
        <Track 
          key={track.id} 
          track={track} 
          onAdd={onAdd} 
          isRemovable={isRemovable}
          onRemove={onRemove}
        />
      )}
    </div>
  );
}

export default Tracklist;