import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Select, MenuItem, FormControl } from "@material-ui/core";
import { useEffect, useState } from "react";
import MaterialTable from "material-table";
import "./Data.css";
import axios from "axios";
export default function Data() {
  const navigate = useHistory();
  const [api, setApi] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [tableStatus, setTableStatus] = useState(false);
  const data = [
    { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
    { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  ];

  const columns = [
    { title: "ID", field: "id" },
    { title: "ScannedOn", field: "scannedOn", width: "15%" },
    { title: "Status", field: "status" },
    { title: "DimensionUnit", field: "dimensionUnit" },
    { title: "Length", field: "length" },
    { title: "Width", field: "width" },
    { title: "Height", field: "height" },
    { title: "VolumetricWeight", field: "volumetricWeight" },
    { title: "Sku", field: "sku" },
    { title: "ActualWeight", field: "actualWeight" },
    { title: "AdditionalInfo", field: "additionalInfo" },
  ];

  useEffect(() => {
    document.querySelector("#ip-adress").value = 192.168;
  }, []);

  function submitData() {
    let firstID = document.querySelector("#first-id").value;
    let lastID = document.querySelector("#last-id").value;
    let ip = document.querySelector("#ip-adress").value;
    console.log("first ID:", firstID, " last ID:", lastID, " Ip address:", ip);
    if (!firstID || !lastID || !ip) {
      //handle error
    }
    if (api == "1") {
      axios({
        method: "get", //you can set what request you want to be
        url: "http://" + ip + ":6600/api/dimension",
        headers: {
          range: "id",
          from: firstID,
          to: lastID,
        },
      })
        .then((res) => {
          if (res) {
            console.log("data:", res.data);
            setTableData(res.data);
            setTableStatus(true);
          }
        })
        .catch((Err) => console.log(Err));
    }
  }

  return (
    <div className="data-api-container">
      <div className={!tableStatus ? "ip-bar-down" : "ip-bar-up"}>
        <label for="ip-adress"> IP address: </label>
        <input id="ip-adress" type="text" />
      </div>
      <div className={!tableStatus ? "api-bar-down" : "api-bar-up"}>
        <div className="select-container">
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
              <MenuItem value="1">
                Get Measure By ID Range
                <div className="id-container"></div>
              </MenuItem>
              {/* <MenuItem value="2">Get Measure By Date Range</MenuItem> */}
            </Select>
          </FormControl>
        </div>
        <div className={api == "1" ? "id-container" : "grayout"}>
          <label for="first-id"> First ID: </label>
          <input id="first-id" type="number" />
          <label for="last-id"> Last ID: </label>
          <input id="last-id" type="number" />
        </div>
        <input
          className={api == "1" ? "submit" : "grayout"}
          onClick={submitData}
          type="submit"
        />
      </div>
      <div className={tableStatus ? "material-table" : "grayout"}>
        <MaterialTable
          style={{
            width: "100%",
            height: "100%",
            overflowX: "scroll",
          }}
          title="Dimension Data"
          columns={columns}
          data={tableData}
        />
      </div>
    </div>
  );
}
