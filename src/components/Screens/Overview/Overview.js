import React from "react";
import ovpic from "../../../Photos/ph2.JPG";
import "./overview.css";
import {
  overviewParag1,
  overviewParag2,
  overviewParag3,
} from "../../../GreenvilleDocs/GreenvilleDocs";
export default function Overview() {
  return (
    <div className="overview-container">
      <div className="ov-image-cont">
        <img src={ovpic} className="ov-image" />
      </div>
      <div className="ov-parag-cont">
        {overviewParag1}
        {overviewParag2}
        {overviewParag3}
      </div>
    </div>
  );
}
