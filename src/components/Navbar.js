import React from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // NavLink,
  Link,
} from "react-router-dom";

const Navbar = props => {
  const { setPageName } = props;
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav">
          <Link
            className={props.location.pathname === "/" ? "active" : ""}
            to="/"
          >
            Dashboard
          </Link>
          <Link
            className={
              props.location.pathname === "/startup-school" ? "active" : ""
            }
            to="/startup-school"
          >
            Startup School
          </Link>
          <Link
            className={props.location.pathname === "/calendar" ? "active" : ""}
            to="/calendar"
          >
            Calendar
          </Link>
          <Link
            className={
              props.location.pathname === "/applications" ? "active" : ""
            }
            to="/applications"
            onClick={() => setPageName(props.location.pathname)}
          >
            Applications
          </Link>
          <Link
            className={props.location.pathname === "/investors" ? "active" : ""}
            to="/investors"
          >
            Investors
          </Link>
          <Link
            className={
              props.location.pathname === "/upcoming-events" ? "active" : ""
            }
            to="/upcoming-events"
          >
            Upcoming Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
