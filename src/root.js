import React from "react";
import Navbar from "./nav";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
function Rootlayout() {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Rootlayout;
