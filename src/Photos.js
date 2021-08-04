import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map((photo, index) => {
          return (
            <a href={photo.src.original} target="_blank">
              <img
                src={photo.src.small}
                key={index}
                alt="word-related images"
              />
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
