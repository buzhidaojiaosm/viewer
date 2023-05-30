import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepositoriesList from "./component/RepositoriesLists";
import RepositoryDetails from "./component/RepositoryDetails";


const App = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<div>
            <h1>Github Repositories Viewer</h1>
            <input
              placeholder="Enter Github Username"
              value={username}
              onChange={handleChange}
            />
            <RepositoriesList username={username} />
          </div>} />
          <Route path="/repo/:owner/:repoName" element={<RepositoryDetails />} />
        </Routes>
      </Router>
    </div>
  );
};


export default App;
