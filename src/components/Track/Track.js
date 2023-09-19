import React from 'react';
import './Track.module.css';

function Track({ track, onAdd, isRemovable, onRemove }) {
    return (
        <div className="Track">
        <div className="Track-info">
          <h3 className="Track-name">{track.name}</h3>
          <p className="Track-artist-album">{track.artist} | {track.album}</p>
        </div>
  
        {!isRemovable ?
          <button className="Track-action" onClick={() => onAdd(track)}>+</button>
          :
          <button className="Track-action" onClick={() => onRemove(track)}>-</button>
        }
      </div>
    );
  }

export default Track;