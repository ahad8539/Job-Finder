import React, { useContext, useState } from "react";
import Listings from "./Listings";
import { ThemeContext } from "../context/Provider";

export default function AddJobs() {
  const [job, setJob] = useState("");
  const [desc, setDesc] = useState("");
  const [editIndex, setEditIndex] = useState(null); // Track current edit job index

  const [posts, , onAddJob, handleEdit] = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (job.trim() === "" || desc.trim() === "") return;

    const newJob = { job, desc };

    if (editIndex !== null) {
      handleEdit(editIndex, newJob);       // update existing job
      setEditIndex(null);                  // exit edit mode
    } else {
      onAddJob(newJob);                    // add new job
    }

    setJob("");
    setDesc("");
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setJob(posts[index].job);
    setDesc(posts[index].desc);
  };

  return (
    <div className="add-jobs-container">
      <h2>{editIndex !== null ? "Edit Job Posting" : "Add Job Posting"}</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <div className="form-group">
          <label>Job Title:</label>
          <input
            type="text"
            value={job}
            placeholder="Enter job title"
            onChange={(e) => setJob(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={desc}
            placeholder="Enter job description"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="add-job-btn">
          {editIndex !== null ? "Update Job" : "Add Job"}
        </button>
      </form>
      <Listings startEdit={startEdit}/>
    </div>
  );
}
