import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../context/Provider";

export default function Jobs({ startEdit }) {
  const location = useLocation();
  const [posts, handleDelete, ,] = useContext(ThemeContext);

  return (
    <div>
      {posts.length > 0 && <h3>Job Listings</h3>}
      <div className="job-c">
        {posts.map((post, index) => (
          <div className="job-card" key={index}>
            <h4>{post.job}</h4>
            <p>{post.desc}</p>
            {location.pathname === "/add" && (
              <div>
                <button
                  className="add-job-btn"
                  onClick={() => handleDelete(index)}
                >
                  DELETE
                </button>
                <button
                  className="add-job-btn"
                  onClick={() => startEdit(index, post)}
                >
                  EDIT
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
