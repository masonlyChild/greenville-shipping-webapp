import React from "react";
import shipLogo from "../../Photos/Logo/IMG_0486.JPG";
import "./header.css";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header-logo-cont">
        <img className="logo" src={shipLogo} alt="greenvile_logo" />
      </div>
      <div className="header-details-cont">
        <div className="header-details">
          <p className="titleText">
            Greenville Shipping And Stevedoring Company
          </p>
          <br />
          <p className="address">
            Saw Mill, P.O.Box 1760 UN Drive <br />
            Port Area Opposite NPA Head Office, Bushrod Island
            <br /> Monrovia, Liberia
          </p>
          <br />
          <p className="email">Email: greenship2013@gmail.com </p>
          <br />
          <p className=" mobileNumbers">
            Mobile numbers: 231-776836175 231-886517488 231-776836175
          </p>
        </div>
      </div>
    </div>
  );
}
// const styles = {
//   headerContainer: {
//     display: "flex",
//     backgroundColor: "rgb(30, 77, 30)",
//   },
//   logoFlexContainer: {
//     flex: 0,
//     backgroundColor: "rgb(30, 77, 30)",
//   },
//   tit_Add_FlexContainer: { flex: 1 },
// };
