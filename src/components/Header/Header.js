import React from "react";
import NavBar from "../NavBar/NavBar";
import Address from "./Address";
import Contact from "./Contact";
import "./Header.css";
import Logo from "./Logo";
import Title from "./Title";

export default function Header() {
  return (
    <div className="headerContainer">
      <div style={logoFlexContainer}>
        <Logo />
      </div>
      <div style={TitAddConFlexContainer}>
        <Title />
        <Address />
        <Contact />
      </div>
    </div>
  );
}
const logoFlexContainer = {
  flex: 0,
  marginTop: "1%",
  marginBottom: "1%",
  marginLeft: "1%",
  marginRigt: "1%",
};
const TitAddConFlexContainer = { flex: 0.9 };
