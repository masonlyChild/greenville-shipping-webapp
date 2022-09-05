import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./components/Screens/About/About";
import Services from "./components/Screens/Services_/Services";
import Profile from "./components/Screens/Profile/Profile";
import Photos from "./components/Screens/Photos/Photos";
import Contact from "./components/Screens/Contact/Contact";
import AboutDetails from "./components/Screens/About/AboutDetails";
import Home from "./components/Screens/Home/Home";
import Videos from "./components/Screens/Videos/Videos";
import Documents from "./components/Screens/Documents/Documents";
import Management from "./components/Screens/Management/Management";
import ProfileContextProvider from "./context/ProfileContext";
import ManagementContextProvider from "./context/ManagementContext";
import PhotosContextProvider from "./context/PhotosContext";
import VideosContextProvider from "./context/VideosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProfileContextProvider>
      <ManagementContextProvider>
        <PhotosContextProvider>
          <VideosContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />}>
                  <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  {/* <Route path=":aboutId" element={<AboutDetails />} /> */}

                  {/* </Route> */}
                  <Route path="services" element={<Services />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="photos" element={<Photos />} />
                  <Route path="videos" element={<Videos />} />
                  <Route path="legalDocs" element={<Documents />} />
                  <Route path="management" element={<Management />} />
                  <Route
                    path="*"
                    element={
                      <main style={{ padding: "1rem", textAlign: "center" }}>
                        <p>There's nothing here!</p>
                      </main>
                    }
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </VideosContextProvider>
        </PhotosContextProvider>
      </ManagementContextProvider>
    </ProfileContextProvider>
  </React.StrictMode>
);
// "name": "greenvilee-shipping",
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
