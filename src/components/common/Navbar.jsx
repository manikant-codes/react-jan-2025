import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px"
      }}
    >
      <h1 style={{ margin: "0px" }}>My Website</h1>
      <ul
        style={{
          display: "flex",
          gap: "32px",
          padding: "0px",
          margin: "0px",
          listStyleType: "none"
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
