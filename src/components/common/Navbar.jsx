import React from "react";

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
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
