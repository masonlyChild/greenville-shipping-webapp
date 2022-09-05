import React from "react";
import Contact from "../../Header/Contact";
import "./Services.css";
export default function Services() {
  return (
    <div
      style={{
        marginTop: "2%",
        marginLeft: ".5%",
        marginRight: ".5%",
        textAlign: "center",
        // overflowY: "auto",
        // height: 700,
      }}
    >
      <div style={{ textAlign: "" }}>
        <p style={{ fontSize: 20 }}>
          At Greenville Shipping and Stevedoring Company, we perfectly provide
          the following services:
        </p>

        <ul
          style={{
            listStyleType: "none",
            textAlign: "",
            fontStyle: "italic",
            color: "blue",
            fontWeight: "",
            // fontSize: 20,
          }}
        >
          <li>SHIPPING / SHIPMENT</li>
          <li>STEVEDORING</li>
          <li>CARGO HANDLING</li>
        </ul>

        <p
          style={{
            color: "navy",
            textAlign: "",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Please contact us through our Email or call us on any of our Mobile
          numbers
        </p>
      </div>
    </div>
  );
}
