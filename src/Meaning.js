import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.pardOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              <br />
              <h6>Meaning</h6>
              {definition.definition}
              <br />
              <h6>Example</h6>"{definition.example}"
            </p>
          </div>
        );
      })}
    </div>
  );
}
