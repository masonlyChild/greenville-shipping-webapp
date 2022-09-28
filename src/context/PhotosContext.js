import React, { createContext, useState } from "react";
import pic4 from "../Photos/ph4.JPG";
import pic1 from "../Photos/ph1.JPG";
import pic2 from "../Photos/ph2.JPG";
import pic3 from "../Photos/ph3.JPG";
import pic5 from "../Photos/ph5.JPG";
import pic6 from "../Photos/ph6.JPG";
import pic7 from "../Photos/ph7.JPG";
const pictures = [
  { id: Math.random(), caption: "CEO at work", image: pic4 },
  { id: Math.random(), caption: "CEO operations", image: pic5 },
  { id: Math.random(), caption: "CEO", image: pic6 },
  { id: Math.random(), caption: "CEO", image: pic6 },

  {
    id: Math.random(),
    caption: "Employee on Iron Ore" /*shipment plan*/,
    image: pic1,
  },
  {
    id: Math.random(),
    caption: "Iron Ore shipment " /*operations*/,
    image: pic2,
  },
  {
    id: Math.random(),
    caption: "Crew discharging rice " /*'Mv Minoan'*/,
    image: pic3,
  },
  {
    id: Math.random(),
    caption: " 'Mv Minoan' rice discharge" /*'Mv Minoan'*/,
    image: pic7,
  },
];
//CREATING APP-STATE CONTEXT               INITIAL APP-STATE
export const PhotosContext = createContext([[], () => []]);

//CREATING APP-STATE PROVIDER
export default function PhotosContextProvider({ children }) {
  const [photos, setPhotos] = useState(pictures);
  return (
    <PhotosContext.Provider value={[photos, setPhotos]}>
      {children}
    </PhotosContext.Provider>
  );
}
