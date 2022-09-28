import React from "react";
import NavBarButton from "../customNavBarButton/NavBarButton";
import { Link, Outlet } from "react-router-dom";
import "./menu.css";
export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-nav-buttons-cont">
        <div className="menu-button-cont">
          <NavBarButton buttonName="Home" to={"/home"} />
        </div>
        <div className="menu-button-cont">
          <NavBarButton buttonName="Services" to={"/services"} />
        </div>
        <div className="menu-button-cont">
          <NavBarButton buttonName="Gallery" to={"/gallery"} />
        </div>
        <div className="menu-button-cont">
          <NavBarButton buttonName="Contact" to={"/contact"} />
        </div>
        <div className="menu-button-cont">
          <NavBarButton buttonName="Profile" to={"/profile"} />
        </div>
      </div>
      {/* <div className="contents-outlet">
        <Outlet />
      </div> */}
    </div>
  );
}
