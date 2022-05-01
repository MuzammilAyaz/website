import React from "react";
import "./Navbar.css";
import { Router, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import INFO_ICON from "../../Images/info_icon.png";
import API_ICON from "../../Images/api_icon.png";

const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/api");
  }, []);
  return (
    <div className="navbar-container">
      <img
        src={API_ICON}
        alt="API"
        onClick={() => {
          navigate("/api");
        }}
      />
      <img
        src={INFO_ICON}
        alt="info"
        onClick={() => {
          navigate("/info");
        }}
      />
    </div>
  );
};

export default Navbar;
