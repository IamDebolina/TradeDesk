import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import UserContext from "./UserContext";
import { BACKEND_URL, LOGIN_URL } from "../config";

const Home = () => {
  const [username, setUsername] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/verify`, { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          setUsername(res.data.user);
        } else {
          window.location.href = LOGIN_URL;
        }
      })
      .catch(() => setError("Cannot reach the server. Please try again."));
  }, []);

  if (error) return <p style={{ padding: "20px" }}>{error}</p>;
  if (!username) return <p style={{ padding: "20px" }}>Loading...</p>;

  return (
    <UserContext.Provider value={username}>
      <TopBar />
      <Dashboard />
    </UserContext.Provider>
  );
};

export default Home;