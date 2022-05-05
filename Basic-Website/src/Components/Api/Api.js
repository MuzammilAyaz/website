import React from "react";
import "./Api.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Api = () => {
  const navigate = useNavigate();
  return (
    <div className="api-container">
      <div className="api-grid">
        <div
          className="content"
          onClick={() => {
            navigate("/data");
          }}
        >
          Data
        </div>
        <div
          className="content"
          onClick={() => {
            navigate("/action");
          }}
        >
          Action
        </div>
        <div
          className="content"
          onClick={() => {
            navigate("/other");
          }}
        >
          Other
        </div>
      </div>
    </div>
  );
};

export default Api;
