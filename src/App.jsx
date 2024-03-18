import React from "react";
import { Route, Routes, Router } from "react-router-dom";

import "./App.css";
import Home from "./Pages/components/Home";
import Profile from "./Pages/components/Profile";
import About from "./Pages/components/About";

function App() {
  return (
    <Routes>
      <Route path="/sba320/" element={<Home />} />
      <Route path="/sba320/profile" element={<Profile />} />
      <Route path="/sba320/about" element={<About />} />
    </Routes>
  );
}
export default App;
