import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <br />
            {definition.definition}
            <br />
            <br />
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
