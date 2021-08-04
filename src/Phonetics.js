import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-volume-up"></i>
        </a>
        <span> {props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
