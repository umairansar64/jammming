import React from 'react';
import './Track.module.css';

function Track() {
    const songData = {
        title: "Mock Song",
        artist: "Mock Artist",
        duration: "3:30"
    };

    return (
        <div className="Track">
        <h1>{songData.title}</h1>
        <p>Artist: {songData.artist}</p>
        <p>Duration: {songData.duration}</p>
        </div>
    );
}

export default Track;