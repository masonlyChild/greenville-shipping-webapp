import React from "react";
import shipLogo from "../../Photos/Logo/IMG_0486.JPG";
import "./Logo.css";
export default function Logo() {
  return (
    <div className="logoContainer" style={{ flexDirection: "row", flex: 1 }}>
      <img className="logo" src={shipLogo} alt="greenvile_logo" />
    </div>
  );
}
