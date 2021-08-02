import React from "react";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>
        <span> {props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
