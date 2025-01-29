import React from "react";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Page */}
      <Outlet />
      {/* Footer */}
      <div
        style={{
          backgroundColor: "#212121",
          padding: "16px 32px",
          textAlign: "center"
        }}
      >
        <p>&copy; All rights reserved.</p>
      </div>
    </div>
  );
}

export default Layout;
