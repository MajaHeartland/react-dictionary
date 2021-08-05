import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map((photo, index) => {
          return (
            <a
              key={index}
              href={photo.src.original}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={photo.src.small} alt="word-related images" />
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
