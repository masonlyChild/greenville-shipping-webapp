import React from "react";
import { Gdocs } from "../../../GreenvilleDocs/GreenvilleDocs";
import "./Contact.css";

export default function Contact() {
  return (
    <div
      style={{
        marginTop: "2%",
        marginLeft: "2%",
        marginRight: "2%",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          fontSize: 20,
          fontStyle: "italic",
          color: "blue",
        }}
      >
        Our office is located on the Bushrod Island opposite NPA Head Offices,
        with Post Office Box 1760 Monrovia, Liberia.
      </p>
      <p>
        {" "}
        Contact us through our Email or call us on any of our Mobile numbers
        <h1 style={{ textDecoration: "underline" }}>EMAIL:</h1>
        <p
          style={{
            fontWeight: "bold",
            fontSize: 22,
            fontStyle: "italic",
            color: "navy",
          }}
        >
          <a>greenship2013@gmail.com</a>
        </p>
        <h1 style={{ textDecoration: "underline" }}>MOBILE NUMBERS:</h1>
        <ol
          style={{
            listStyleType: "none",
            fontWeight: "bold",
            fontSize: 22,
            fontStyle: "italic",
            color: "navy",
          }}
        >
          <li>+231 776 836 175</li>
          <li>+231 886 517 488</li>
          <li>+231 776 836 175</li>
        </ol>
        <p></p>
      </p>
    </div>
  );
}
