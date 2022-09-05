import React from "react";
import "./NavBar.css";
import NavButton from "./NavButton";
import { NavLink, Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      style={{
        marginTop: 0,
        // display: "flex",
        // overflow: "hidden",
        // overflowY: "scroll",
      }}
    >
      <nav
        style={{
          position: "static",
          // top: "21.5%",
          // top: 210,
          width: "100%",
          backgroundColor: "black",
          textAlign: "center",
        }}
      >
        <NavLink
          style={({ isActive }) => (isActive ? navButtonIsActive : navButton)}
          to="/home"
        >
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? navButtonIsActive : navButton)}
          to="/services"
        >
          Services
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? navButtonIsActive : navButton)}
          to="/profile"
        >
          Profile
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? navButtonIsActive : navButton)}
          to="/contact"
        >
          Contact Us
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? navButtonIsActive : navButton)}
          to="/photos"
        >
          Photos
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? navButtonIsActive : navButton)}
          to="/videos"
        >
          Videos
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? navButtonIsActive : navButton)}
          to="/legalDocs"
        >
          Legal Docs
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? navButtonIsActive : navButton)}
          to="/management"
        >
          Management
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
const navButton = {
  textAlign: "center",
  color: "black",
  appearance: "button",
  backgroundColor: "lightgreen",
  textDecoration: "none",
  margin: ".1%",
  paddingLeft: "4.5%",
  paddingRight: "4.5%",
};
const navButtonIsActive = {
  textAlign: "center",
  color: "lightgreen",
  appearance: "button",
  backgroundColor: "black",
  textDecoration: "none",
  margin: ".1%",
  paddingLeft: "4.5%",
  paddingRight: "4.5%",
};
