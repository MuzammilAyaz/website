import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Api from "./Components/Api/Api";
import Info from "./Components/Info/Info";
// import { BrowserRouter as Router, NavLink, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="main-container">
        <Routes>
          <Route path="/api" element={<Api />}></Route>
          <Route path="/info" element={<Info />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
