import React, { createContext, useState } from "react";
import vid1 from "../Videos/movie.mp4";
import vid5 from "../Videos/movie1.mp4";

const videosList = [
  { id: Math.random(), caption: "CEO at work", clip: vid5 },
  { id: Math.random(), caption: "CEO at work", clip: vid5 },
  { id: Math.random(), caption: "CEO at work", clip: vid5 },
  { id: Math.random(), caption: "CEO at work", clip: vid5 },
  { id: Math.random(), caption: "CEO at work", clip: vid5 },
  { id: Math.random(), caption: "CEO at work", clip: vid5 },
  { id: Math.random(), caption: "CEO at work", clip: vid5 },
  { id: Math.random(), caption: "CEO at work", clip: vid5 },
];
//CREATING APP-STATE CONTEXT               INITIAL APP-STATE
export const VideosContext = createContext([[], () => []]);

//CREATING APP-STATE PROVIDER
export default function VideosContextProvider({ children }) {
  const [videos, setVideos] = useState(videosList);
  return (
    <VideosContext.Provider value={[videos, setVideos]}>
      {children}
    </VideosContext.Provider>
  );
}
