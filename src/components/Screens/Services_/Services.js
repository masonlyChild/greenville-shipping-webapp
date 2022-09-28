import React from "react";
import "./Services.css";
import ServicesGallery from "./ServicesGallery/ServicesGallery";
export default function Services() {
  return (
    <div className="services-container">
      <p className="services-intro-parag">
        At Greenville Shipping and Stevedoring Company, we perfectly provide the
        following services:
      </p>
      <ul className="services-list-cont">
        <li className="services-list-item">SHIPPING / SHIPMENT</li>
        <li className="services-list-item">STEVEDORING</li>
        <li className="services-list-item">CARGO HANDLING</li>
      </ul>

      <p className="services-footer">
        Please contact us through our Email or call us on any of our Mobile
        numbers
      </p>
      <ServicesGallery />
    </div>
  );
}
