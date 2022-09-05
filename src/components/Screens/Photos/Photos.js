import React, { useContext, useState } from "react";
import { PhotosContext } from "../../../context/PhotosContext";

export default function Photos() {
  const [photos, setPhotos] = useContext(PhotosContext);
  return (
    <main
      style={{
        overflowY: "auto",
        height: 700,
        margin: ".5%",
        marginLeft: ".5%",
        marginRight: ".5%",
        textAlign: "center",
      }}
    >
      {photos.map((photo) => (
        <div
          key={photo.id}
          style={{
            display: "inline-flex",
            marginTop: 2,
            marginBootom: 4,
            marginLeft: 3,
            marginRight: 3,
            border: "1px solid darkgreen",
          }}
        >
          <div>
            <p
              style={{
                color: "lightgreen",
                textAlign: "center",
                backgroundColor: "black",
                margin: 0,
              }}
            >
              {photo.caption}
            </p>
            <img
              contextMenu="text"
              src={photo.image}
              style={{
                width: 450,
                height: 400,
                objectFit: "fill",
              }}
            />
          </div>
        </div>
      ))}
    </main>
  );
}
