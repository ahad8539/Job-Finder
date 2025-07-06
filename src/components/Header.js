import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <h1>Job Finder</h1>
      <div className="header2">
        <ul>
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              <button>Jobs</button>
            </Link>
          </li>
          <li>
            <Link to="/add">
              <button>Add Jobs</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button>About Us</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
