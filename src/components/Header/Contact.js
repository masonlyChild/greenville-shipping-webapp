import React from "react";

export default function Contact() {
  return (
    <div style={contactContainer}>
      <div>
        <h4 style={emailLabel}>Email</h4>
        <h5 style={email}>greenship2013@gmail.com</h5>
      </div>
      <div style={mobileContainer}>
        <h4 style={mobileLabel}>Mobile</h4>
        <div style={mobileItemsContainer}>
          <h5 style={mobileItems}>(231) 776 836 175</h5>
          <h5 style={mobileItems}>(231) 886 517 488</h5>
          <h5 style={mobileItems}>(231) 776 836 175</h5>
        </div>
      </div>
    </div>
  );
}

const contactContainer = {
  color: "snow",
  marginTop: -20,
};

const emailLabel = { fontWeight: "normal" };

const email = {
  marginTop: -20,
  marginRight: 5,
  marginLeft: 5,
  fontWeight: "normal",
  color: "lawngreen",
  fontStyle: "italic",
};

const mobileContainer = {
  marginTop: -20,
};

const mobileLabel = {
  marginBottom: -5,
  marginRight: 0,
  marginLeft: 0,
  fontWeight: "normal",
};

const mobileItemsContainer = {
  display: "inline-flex",
  width: "25%",
  marginBottom: -15,
};

const mobileItems = {
  flex: 1,
  marginTop: -1,
  fontWeight: "normal",
  color: "lawngreen",
  fontStyle: "italic",
};
