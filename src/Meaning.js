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
            <h6>Definition</h6>
            {definition.definition}
            <br />
            <br />
            <h6>Example</h6>"{definition.example}"
          </div>
        );
      })}
    </div>
  );
}
