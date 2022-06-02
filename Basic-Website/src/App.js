import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Api from "./Components/Api/Api";
import Info from "./Components/Info/Info";
import Data from "./Components/Data/Data";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter as Router, NavLink, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="main-container">
          <Switch>
            {/* <Route exact path="/">
              <Api></Api>
            </Route> */}
            <Route path="/api">
              <Api></Api>
            </Route>
            <Route path="/info">
              <Info></Info>
            </Route>
            <Route path="/data">
              <Data></Data>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
