import React from "react";
import "./Navbar.css";
import { Router, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import INFO_ICON from "../../Images/info_icon.png";
import API_ICON from "../../Images/api_icon.png";

const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementById("api-icon").style.padding = "5%";
    document.getElementById("api-icon").style.background = "#7CB9E8";
    navigate("/api");
  }, []);

  //to add padding
  function AddPadding(n) {
    if (n === 0) {
      document.getElementById("api-icon").style.padding = "5%";
      document.getElementById("api-icon").style.background = "#7CB9E8";
      document.getElementById("info-icon").style.padding = "0%";
      document.getElementById("info-icon").style.background =
        "rgb(0, 118, 224)";
    }
    if (n === 1) {
      document.getElementById("info-icon").style.padding = "5%";
      document.getElementById("info-icon").style.background = "#7CB9E8";
      document.getElementById("api-icon").style.padding = "0%";
      document.getElementById("api-icon").style.background = "rgb(0, 118, 224)";
    }
  }
  return (
    <div className="navbar-container">
      <img
        src={API_ICON}
        id="api-icon"
        alt="API"
        onClick={() => {
          AddPadding(0);
          navigate("/api");
        }}
      />
      <img
        src={INFO_ICON}
        id="info-icon"
        alt="info"
        onClick={() => {
          AddPadding(1);
          navigate("/info");
        }}
      />
    </div>
  );
};

export default Navbar;
