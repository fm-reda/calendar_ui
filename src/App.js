import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CalendarPage from "./components/CalendarPage";
import Dashboard from "./components/Dashboard";

function App(props) {
  const [pageName, setPageName] = useState();

  return (
    <>
      <Router>
        <Header />
        {/* <Navbar /> */}
        <Route
          path="/"
          render={props => <Navbar {...props} setPageName={setPageName} />}
        />
        .{" "}
        <div className="section-m container ">
          <Route exact path="/">
            <Dashboard pageName={pageName} />
          </Route>

          <Route exact path="/calendar">
            <CalendarPage />
          </Route>
          {/* <Route exact path="/applications">
              <Dashboard pageName={pageName} />
            </Route> */}
        </div>
      </Router>
    </>
  );
}

export default App;
