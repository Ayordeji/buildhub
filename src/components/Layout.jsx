// src/components/Layout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // Outlet renders child routes
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

// Map path → page title
const titles = {
  "/": "Home",
  "/connections": "Connections",
  "/profile": "Profile",
};

export default function Layout() {
  const location = useLocation(); // Detect current route
  const pageTitle = titles[location.pathname] || "BuildHub"; // Dynamic title

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (left side) */}
      <Sidebar />

      {/* Right side = Navbar + Page content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar with dynamic title */}
        <Navbar pageTitle={pageTitle} />

        {/* Render the current page */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
