import React, { useContext } from "react";
import ovpic from "../../../Photos/ph2.JPG";
import { PhotosContext } from "../../../context/PhotosContext";
import {
  overviewParag1,
  overviewParag2,
  overviewParag3,
} from "../../../GreenvilleDocs/GreenvilleDocs";
export default function Overview() {
  return (
    <div
      style={{
        marginTop: "1%",
        marginLeft: "2.8%",
        marginRight: "2.8%",
      }}
    >
      <div style={{ fontSize: 20, display: "flex" }}>
        <div style={{ marginTop: 25, marginRight: 10 }}>
          <img src={ovpic} width={300} height={200} />
        </div>
        <div>
          {overviewParag1}
          {overviewParag2}
          {overviewParag3}
        </div>
      </div>
    </div>
  );
}
