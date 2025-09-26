// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // For routing
import Layout from "./components/Layout"; // Shared layout
import Home from "./pages/Home"; // Home page
import Connections from "./pages/Connections"; // Connections page
import Profile from "./pages/Profile"; // Profile page

export default function App() {
  return (
    // Define all routes
    <Routes>
      {/* Wrap routes in Layout (Navbar + Sidebar stay visible) */}
      <Route path="/" element={<Layout />}>
        {/* Default route = Home */}
        <Route index element={<Home />} />
        {/* Other pages */}
        <Route path="connections" element={<Connections />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
