import React from "react";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import "./layout.css";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="layout-grid-container">
      <div className="header">
        <Header />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
}
