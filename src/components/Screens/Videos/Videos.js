import React, { useContext } from "react";
import { VideosContext } from "../../../context/VideosContext";

export default function Videos() {
  const [videos, setVideos] = useContext(VideosContext);
  return (
    <div style={styles.videosContainer}>
      {videos.map((video) => (
        <div style={styles.videoFileCont}>
          <div>
            <p style={styles.caption}>{video.caption}</p>
            <video
              style={{ objectFit: "fill" }}
              controls
              width={400}
              height={300}
            >
              <source src={video.clip} type="video/mp4" />
            </video>
          </div>
        </div>
      ))}
    </div>
  );
}
const styles = {
  videosContainer: {
    marginTop: ".5%",
    marginLeft: ".5%",
    marginRight: ".5%",
    textAlign: "center",
    overflowY: "auto",
    height: 700,
  },
  videoFileCont: {
    border: "1px solid darkgreen",
    margin: 4,
    display: "inline-flex",
  },
  caption: {
    textAlign: "center",
    margin: 0,
    color: "lightgreen",
    backgroundColor: "black",
  },
};
