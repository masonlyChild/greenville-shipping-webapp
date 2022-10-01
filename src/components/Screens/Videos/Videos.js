import React, { useContext } from "react";
import { VideosContext } from "../../../context/VideosContext";
import "./videos.css";
export default function Videos() {
  const [videos, setVideos] = useContext(VideosContext);
  return videos.map((video) => (
    <div key={video.id} className="videos-container">
      <div className="clipCapt_and_clip_cont">
        <p className="clipCapt">{video.caption}</p>
        <video className="clip" controls>
          <source src={video.clip} type="video/mp4" />
        </video>
      </div>
    </div>
  ));
}
// const styles = {
//   videosContainer: {
//     marginTop: ".5%",
//     textAlign: "center",
//     overflowY: "auto",
//     height: 705,
//     // marginLeft: ".5%",
//     // marginRight: ".5%",
//   },
//   videoFileCont: {
//     display: "inline-flex",

//     border: "1px solid darkgreen",
//     margin: 2,
//   },
//   caption: {
//     textAlign: "center",
//     margin: 0,
//     //color: "lightgreen",
//     backgroundColor: "gray",
//   },
// };
