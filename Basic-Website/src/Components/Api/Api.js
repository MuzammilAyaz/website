import React from "react";
import "./Api.css";
import { useHistory } from "react-router-dom";

const Api = () => {
  const navigate = useHistory();
  return (
    <div className="api-container">
      <div className="api-grid">
        <div
          className="content"
          onClick={() => {
            navigate.push("/data");
          }}
        >
          Data
        </div>
        <div
          className="content"
          onClick={() => {
            navigate.push("/action");
          }}
        >
          Action
        </div>
        <div
          className="content"
          onClick={() => {
            navigate.push("/other");
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default Api;
