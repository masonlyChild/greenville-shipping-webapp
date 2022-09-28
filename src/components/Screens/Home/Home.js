import React, { useContext } from "react";
import { PhotosContext } from "../../../context/PhotosContext";
import { VideosContext } from "../../../context/VideosContext";
import Overview from "../Overview/Overview";
import Profile from "../Profile/Profile";
import Services from "../Services_/Services";
import "./home.css";
export default function Home() {
  const [photos, setPhotos] = useContext(PhotosContext);
  const [videos, setVideos] = useContext(VideosContext);
  return (
    <div className="home-container">
      <p className="home-title">
        Greenville Shipping and Stevedoring Company Welcomes you!!!
      </p>
      <p className="page-title">Overview</p>
      <Overview />
      <p className="page-title">Services</p>
      <Services />
      <p className="page-title2">We provide the following services:</p>

      {/* <div className="home-images-cont">
        {photos.map((photo) => (
          <div>
            <img className="home-images" src={photo.image} />
          </div>
        ))}
      </div>

      <div className="home-videos-cont">
        {videos.map((video) => (
          <div>
            <video className="home-videos" controls>
              <source src={video.clip} type="video/mp4" />
            </video>
          </div>
        ))}
      </div> */}

      <p className="page-title">Profile</p>
      <Profile />
    </div>
  );
}
// const styles = {
//   homeContainer: {
//     marginTop: ".1%",
//     // marginLeft: ".2%",
//     // marginRight: ".2%",
//     overflowY: "auto",
//     height: 705,
//     //backgroundColor: "snow",
//   },
//   homeTitle: { fontSize: 14, textAlign: "center", fontWeight: "normal" },
//   pageTitle: {
//     textAlign: "center",
//     width: "50%",
//     fontWeight: "normal",
//     color: "lightgreen",
//     backgroundColor: "black",
//     fontSize: 14,
//     marginLeft: "2%",
//   },
//   pageTitle2: {
//     textAlign: "center",
//     width: "50%",
//     fontWeight: "normal",
//     backgroundColor: "gray",
//     color: "black",
//     fontSize: 14,
//     marginLeft: "2%",
//     // textAlign: "center",
//     // width: "15%",
//     // fontWeight: "normal",
//     // backgroundColor: "lightgreen",
//     // color: "black",
//     // fontSize: 20,
//     // marginLeft: "2%",
//     // // marginRight: ".2%",
//   },
//   slideImagesCont: {
//     display: "flex",
//     height: 200,
//     overflowY: "hidden",
//     overflowX: "auto",
//     marginTop: ".1%",
//     marginLeft: "2%",
//     marginRight: "2%",
//   },
//   slideVideosCont: {
//     display: "flex",
//     height: 200,
//     overflowY: "hidden",
//     overflowX: "auto",
//     marginTop: ".1%",
//     marginLeft: "2%",
//     marginRight: "2%",
//   },
//   slideShowSubCont: {},
//   slideShowImage: {
//     margin: 2,
//     // marginLeft: 2,
//     // marginRight: 2,
//     objectFit: "fill",
//   },
// };
