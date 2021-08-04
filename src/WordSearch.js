import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./WordSearch.css";
import React, { useState } from "react";

export default function WordSearch(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleDictionary(response) {
    setResults(response.data[0]);
  }
  function handlePexel(response) {
    setPhotos(response.data.photos);
    console.log(response.data.photos[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleDictionary);

    let pexelKey = `563492ad6f9170000100000171ddf53a5f4840f3ba5636cd95b4189c`;
    let pexelUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelKey}` };
    axios.get(pexelUrl, { headers: headers }).then(handlePexel);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateSearch(event) {
    setWord(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="WordSearch">
        <h5>Search for a word</h5>
        <form onSubmit={handleSubmit}>
          <input
            className="searchInput"
            type="search"
            placeholder="Word"
            onChange={updateSearch}
            defaultValue="hello"
          />
          <input className="searchButton" type="submit" value="Search" />
        </form>
        <br />
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
