import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(posts));
  }, [posts]);

  const handleEdit = (index, updatedJob) => {
  setPosts((prev) =>
    prev.map((post, i) => (i === index ? updatedJob : post))
  );
};

  const onAddJob = (newJob) => {
    setPosts((prev) => [...prev, newJob]);
  };
  const handleDelete = (index) => {
    setPosts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ThemeContext.Provider
      value={[posts, handleDelete, onAddJob,handleEdit]}
    >
      {children}
    </ThemeContext.Provider>
  );
};
