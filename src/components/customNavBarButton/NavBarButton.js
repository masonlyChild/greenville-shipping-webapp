import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

export default function NavBarButton({ to, buttonName, onClick }) {
  const navBarButtonNotActive = {
    textAlign: "center",
    width: "100%",
    color: "snow",
    appearance: "button",
    // backgroundColor: "rgb(30, 77, 30)",
    backgroundColor: "green",
    textDecoration: "none",
  };
  const navBarButtonIsActive = {
    textAlign: "center",
    width: "100%",
    color: "snow",
    appearance: "button",
    // backgroundImage: " linear-gradient(to right, black,green,black)",
    backgroundColor: "black",
    textDecoration: "none",
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? navBarButtonIsActive : navBarButtonNotActive
      }
      to={to}
      onClick={onClick}
    >
      {buttonName}
    </NavLink>
  );
}
