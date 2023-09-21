import React, {useState} from 'react';
import styles from './SearchBar.module.css';
import Spotify from '../Spotify/Spotify';

function SearchBar(props) {
  const [term, setTerm] = useState('');

  const handleTermChange = (event) => {
      setTerm(event.target.value);
  };

  const search = () => {
      Spotify.search(term).then(searchResults => {
          props.onSearch(searchResults); // Assuming you pass a prop named onSearch to update the state of a parent component
      });
  };

  return (
      <div className="SearchBar">
          <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
          <button className="SearchButton" onClick={search}>SEARCH</button>
      </div>
  );
}

export default SearchBar;