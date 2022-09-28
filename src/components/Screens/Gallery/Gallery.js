import React from "react";

import NavBarButton from "../../customNavBarButton/NavBarButton";
import Photos from "../Photos/Photos";
import { Outlet } from "react-router-dom";
import "./gallery.css";
export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-nav-buttons-cont">
        <div className="gallery-button-cont">
          <NavBarButton buttonName={"Photos"} to={"gallery/photos"} />
        </div>
        <div className="gallery-button-cont">
          <NavBarButton buttonName={"Videos"} to={"gallery/videos"} />
        </div>
        <div className="gallery-button-cont">
          <NavBarButton buttonName={"Management"} to={"gallery/management"} />
        </div>
      </div>

      <div className="gallery-contents-outlet">
        <Outlet />
      </div>
    </div>
  );
}
