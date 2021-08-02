import React from "react";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        {props.phonetics.text}
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>
      </div>
    );
  } else {
    return null;
  }
}
