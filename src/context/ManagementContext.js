import React, { createContext, useState } from "react";
import pic4 from "../Photos/ph4.JPG";
import pic1 from "../Photos/ph1.JPG";
import pic2 from "../Photos/ph2.JPG";
import pic3 from "../Photos/ph3.JPG";
import pic5 from "../Photos/ph5.JPG";
//CREATING APP-STATE CONTEXT               INITIAL APP-STATE
export const ManagementContext = createContext([[], () => []]);

//CREATING APP-STATE PROVIDER
export default function ManagementContextProvider({ children }) {
  const pictures = [
    { id: Math.random(), caption: "CEO at work", image: pic4 },
    { id: Math.random(), caption: "CEO at work", image: pic5 },
  ];
  const [management, setManagement] = useState([
    {
      employee: {
        id: Math.random(),
        photo: pic4,
        firstName: "Adam V.",
        lastName: "Kamara",
        position: "CEO/OWNER",
        dob: "xxxxx",
      },
    },
    {
      employee: {
        id: Math.random(),
        photo: pic5,
        firstName: "Lamin",
        lastName: "Haba",
        position: "Secretary",
        dob: "xxxx",
      },
    },
    {
      employee: {
        id: Math.random(),
        photo: pic1,
        firstName: "Moses",
        lastName: "Johnson",
        position: "Agent",
        dob: "xxx",
      },
    },
    {
      employee: {
        id: Math.random(),
        photo: pic3,
        firstName: "Philip N.",
        lastName: "Amiteye",
        position: "Captain",
        dob: "xxxxxx",
      },
    },
    {
      employee: {
        id: Math.random(),
        photo: pic2,
        firstName: "Musa",
        lastName: "Kamara",
        position: "Crew Supervisor",
        dob: "x",
      },
    },
  ]);
  return (
    <ManagementContext.Provider value={[management, setManagement]}>
      {children}
    </ManagementContext.Provider>
  );
}
