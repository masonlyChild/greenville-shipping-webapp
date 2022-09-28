import React, { useContext } from "react";
import { PhotosContext } from "../../../../context/PhotosContext";
import { VideosContext } from "../../../../context/VideosContext";
import "./servicesGallery.css";
export default function ServicesGallery() {
  const [photos, setPhotos] = useContext(PhotosContext);
  const [videos, setVideos] = useContext(VideosContext);
  //   className="services-gallery-container"
  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id} className="serv-gal-images-cont">
          <div className="serv-gal-caption-and-image-cont">
            <p className="serv-gal-image-caption">image caption</p>
            <img className="serv-gal-image" src={photo.image} />
          </div>
        </div>
      ))}
      {videos.map((video) => (
        <div key={video.id} className="serv-gal-videos-cont">
          <div className="serv-gal-caption-and-video-cont">
            <p className="serv-gal-video-caption">video caption</p>
            <video className="serv-gal-video" controls="controls">
              <source src={video.clip} type="video/mp4" />
            </video>
          </div>
        </div>
      ))}
    </div>
  );
}
