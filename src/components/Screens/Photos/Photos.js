import React, { useContext, useState } from "react";
import { PhotosContext } from "../../../context/PhotosContext";
import "./photos.css";
export default function Photos() {
  const [photos, setPhotos] = useContext(PhotosContext);
  return photos.map((photo) => (
    <div key={photo.id} className="photos-container">
      <div className="caption_and_image_cont">
        <p className="caption">{photo.caption}</p>
        <img src={photo.image} className="image" />
      </div>
    </div>
  ));
}
