import React, { useContext } from "react";
import { ProfileContext } from "../../../context/ProfileContext";
import {
  profileParag1,
  profileParag2,
  profileParag3,
  profileParag4,
} from "../../../GreenvilleDocs/GreenvilleDocs";
import "./Profile.css";
// import styles from "../../Styles/styles.module.css";
export default function Profile() {
  const [profile, setProfile] = useContext(ProfileContext);
  return (
    <div className="profileContainer">
      <p>{profileParag1}</p>
      <p>{profileParag2}</p>
      <p>{profileParag3}</p>
      <p>{profileParag4}</p>
    </div>
  );
}
// const styles = {
//   profileContainer: {
//     marginTop: ".1%",
//     marginLeft: "2%",
//     marginRight: "2%",
//     fontSize: 20,
//     // textAlign: "center",
//     // overflowY: "auto",
//     // height: 700,
//   },
//   companyName: {
//     color: "darkgreen",
//     fontWeight: "bold",
//   },
//   specialWords: { fontWeight: "bold", fontStyle: "italic", color: "blue" },
// };
