import React from "react";
import Overview from "../Overview/Overview";
import Profile from "../Profile/Profile";
import Services from "../Services_/Services";

export default function Home() {
  return (
    <div
      style={{
        marginTop: ".5%",
        marginLeft: ".5%",
        marginRight: ".5%",
        overflowY: "auto",
        height: 700,
      }}
    >
      <h1 style={{ textAlign: "center", fontWeight: "normal" }}>
        Greenville Shipping and Stevedoring Company Welcomes you!!!
      </h1>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "normal",
          color: "lightgreen",
          backgroundColor: "black",
          fontSize: 20,
        }}
      >
        Overview
      </h1>
      <Overview />
      <h1
        style={{
          textAlign: "center",
          fontWeight: "normal",
          color: "lightgreen",
          backgroundColor: "black",
          fontSize: 20,
        }}
      >
        Services
      </h1>
      <Services />
      <h1
        style={{
          textAlign: "center",
          fontWeight: "normal",
          color: "lightgreen",
          backgroundColor: "black",
          fontSize: 20,
        }}
      >
        Profile
      </h1>
      <Profile />
    </div>
  );
}
