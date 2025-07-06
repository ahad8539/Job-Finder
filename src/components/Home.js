import React, { useContext } from "react";
import Jobs from "./Jobs";
import {ThemeContext} from "../context/Provider";

export default function Home() {
    const [posts , ,]=useContext(ThemeContext)
  return (
    <div className="home-container">
      <section className="intro">
        <h1>Welcome to Job Finder</h1>
        <p>
          Discover your next opportunity! Browse thousands of job listings or
          post your own.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Job Search"
          className="home-image"
        />
      </section>

      <section className="job-listing">
        {posts.length > 0 ? (
          <>
            <h2>Latest Job Listings</h2>
            <Jobs/>
          </>
        ) : (
          <h3>No job postings yet. Be the first to add one!</h3>
        )}
      </section>
    </div>
  );
}
