import React from "react";
import { Route, Routes, Router } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Home from "./Pages/components/Home";
import Profile from "./Pages/components/Profile";
import About from "./Pages/components/About";

function App() {
  const [token, setToken] = useState();
  const [userData, setUserData] = useState();

  function extractToken(token) {
    console.log(token);
    setToken(token);
  }

  function getUserData(data) {
    setUserData(data);
  }

  return (
    <Routes>
      <Route
        path="/sba320/"
        element={<Home func={extractToken} getUser={getUserData} />}
      />
      <Route
        path="/sba320/profile"
        element={<Profile token={token} userData={userData} />}
      />
      <Route path="/sba320/about" element={<About token={token} />} />
    </Routes>
  );
}
export default App;
