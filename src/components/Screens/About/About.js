import React from "react";
import "./About.css";
import { Link, Outlet } from "react-router-dom";
import Services from "../Services_/Services";
import Profile from "../Profile/Profile";
import Contact from "../Contact/Contact";
import Photos from "../Photos/Photos";
export default function About() {
  let abouts = [
    {
      name: "Santa Monica",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995",
    },
    {
      name: "Stankonia",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      name: "Ocean Avenue",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      name: "Tubthumper",
      number: 1997,
      amount: "$14,000",
      due: "09/01/1997",
    },
    {
      name: "Wide Open Spaces",
      number: 1998,
      amount: "$4,600",
      due: "01/27/1998",
    },
  ];
  return (
    <div className="aboutContainer">
      {/* <Services />
      <Profile />
      <Contact />*/}

      {/* <Photos /> */}
      {/* About
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {abouts.map((abt) => (
          <Link
            to={`/about/${abt.number}`}
            style={{ display: "block", margin: "1rem 0" }}
            // to={`/invoices/${invoice.number}`}
            key={abt.number}
          >
            {abt.name}
          </Link>
        ))}
      </nav>
      <Outlet /> */}
    </div>
  );
}
