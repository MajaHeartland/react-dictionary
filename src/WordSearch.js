import axios from "axios";
import Results from "./Results";
import "./WordSearch.css";
import React, { useState } from "react";

export default function WordSearch(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
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
      </div>
    );
  } else {
    load();
    return null;
  }
}
