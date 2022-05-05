import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, Select, MenuItem, FormControl } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Container, containerClasses } from "@mui/material";
import "./Data.css";
export default function Data() {
  const navigate = useNavigate();
  const [api, setApi] = useState(null);

  useEffect(() => {
    console.log("Api:", api);
  }, [api]);

  return (
    <div className="data-api-container">
      <div className={api ? "api-bar-up" : "api-bar-down"}>
        <FormControl required>
          <Select
            displayEmpty
            autoWidth
            value={api}
            onChange={(e) => {
              setApi(e.target.value);
            }}
          >
            <MenuItem value={null} disabled>
              Select an API
            </MenuItem>
            <MenuItem value="1">Get Measure By ID Range</MenuItem>
            <MenuItem value="2">Get Measure By Date Range</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
