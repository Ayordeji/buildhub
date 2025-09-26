// Import React (needed for JSX)
import React from "react";

// ProfileCard component that receives user data as props
export default function ProfileCard({ name, role, description, avatar }) {
  return (
    // Outer card container with border, rounded corners, and shadow
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden flex flex-col">
      
      {/* --- Top image (banner/placeholder) --- */}
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
        {/* Placeholder image inside */}
        <img
          src="https://via.placeholder.com/600x200" // Placeholder banner image
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- Profile info section --- */}
      <div className="p-4 flex flex-col items-center text-center">
        
        {/* Profile picture */}
        <img
          src={avatar} // User avatar passed as prop
          alt={name}
          className="w-16 h-16 rounded-full border-4 border-white -mt-12 shadow-md"
        />

        {/* Name */}
        <h2 className="mt-3 font-semibold text-gray-900">{name}</h2>

        {/* Role */}
        <p className="text-sm text-gray-500">{role}</p>

        {/* Short description */}
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>

      {/* --- Action buttons section --- */}
      <div className="p-4 flex flex-col gap-2">
        {/* Connect button (primary) */}
        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
          Connect
        </button>

        {/* View Profile button (secondary) */}
        <button className="w-full border border-gray-300 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition">
          View Profile
        </button>
      </div>
    </div>
  );
}
