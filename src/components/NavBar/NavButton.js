import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavButton.css";
export default function NavButton() {
  return (
    <div className="">
      <nav className="navButtonContainer">
        <Link style={navButton} to="/about">
          About
        </Link>

        <Link style={navButton} to="/services">
          Services
        </Link>

        <Link style={navButton} to="/profile">
          Profile
        </Link>

        <Link style={navButton} to="/contact">
          Contact
        </Link>

        <Link style={navButton} to="/photos">
          Photos
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
const navButton = {
  //display: "flex",
  textAlign: "center",
  color: "green",
  appearance: "button",
  backgroundColor: "lawngreen",
  borderRadius: 5,
  textDecoration: "none",
  margin: 5,
  padding: 5,
  // marginTop: 5,
  // marginBottom: 5,
  // marginLeft: "50%",
  // margRight: "50%",
  // paddingTop: 5,
  // paddingBottom: 5,
};
