import React from "react";
import { Gdocs } from "../../../GreenvilleDocs/GreenvilleDocs";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <p className="contact-heading">
        Our office is located on the Bushrod Island opposite NPA Head Offices,
        with Post Office Box 1760 Monrovia, Liberia.
      </p>
      <p>
        Contact us through our Email or call us on any of our Mobile numbers
        <p className="contact-email-label">EMAIL:</p>
        <p className="contact-email">
          <a>greenship2013@gmail.com</a>
        </p>
        <p className="contact-mobileNumbers-label">MOBILE NUMBERS:</p>
        <ul className="contact-mobileNumbers-ulList-cont">
          <li className="contact-mobileNumber">+231 776 836 175</li>
          <li className="contact-mobileNumber">+231 886 517 488</li>
          <li className="contact-mobileNumber">+231 776 836 175</li>
        </ul>
      </p>
    </div>
  );
}
