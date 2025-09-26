// src/components/Sidebar.jsx
import { Home, Users, User } from "lucide-react";
import { Link } from "react-router-dom";
import Icons from "../assets/icons"; // Import all icons

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r hidden md:flex flex-col">
      {/* Sidebar header */}
      <div className="flex items-center gap-2 p-6 text-body-lg font-SB">
        <div>
          <img src={Icons.Logo} />
          </div>
        BuildHub
        </div>
        

      {/* Navigation links */}
      <nav className="flex-1 px-6 space-y-2">

        {/* Collapase */}
        <Link
          to="/"
          className="flex items-center gap-2 py-4 text-black text-opacity-50 hover:bg-grey hover:bg-opacity-20 hover:px-6"
        >
          <img src={Icons.Hamburger} /> Collapse
        </Link>

        {/* Home */}
        <Link
          to="/"
          className="flex items-center gap-2 p-2 text-black text-opacity-50 hover:bg-grey hover:bg-opacity-20 hover:px-6"
        >
          <img src={Icons.House} /> Home
        </Link>

        {/* Connection */}
        <Link
          to="/connections"
          className="flex items-center gap-2 p-2 text-black text-opacity-50 hover:bg-grey hover:bg-opacity-20 hover:px-6"
        >
          <img src={Icons.Connection} /> Connections
        </Link>


        {/* Profile */}
        <Link
          to="/profile"
          className="flex items-center gap-2 p-2 text-black text-opacity-50 hover:bg-grey hover:bg-opacity-20 hover:px-6"
        >
          <img src={Icons.Profile} /> Profile
        </Link>
      </nav>
    </aside>
  );
}
