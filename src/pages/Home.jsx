// src/pages/Home.jsx
import React from "react";
import ProfileCard from "../components/ProfileCard";
import Images from "../assets/images"; // import all banner images

export default function Home() {
  // 👇 Each user has their own name, role, avatar, and unique image gallery
  const users = [
    {
      name: "Adeoya AyoKunle",
      role: "Frontend Developer",
      description:
        "I am a designer and frontend dev with 2 years of experience. I love collaborating with creatives.",
      avatar: "https://i.pravatar.cc/150?img=3",
      gallery: [Images.Banner1, Images.Banner2, Images.Banner3],
    },
    {
      name: "Jane Doe",
      role: "Backend Developer",
      description:
        "Node.js specialist with a knack for optimizing APIs and managing databases efficiently.",
      avatar: "https://i.pravatar.cc/150?img=5",
      gallery: [Images.Banner4, Images.Banner5, Images.Banner6],
    },
    {
      name: "Michael Smith",
      role: "Mobile Developer",
      description:
        "React Native developer focused on building user-friendly, high-performance mobile apps.",
      avatar: "https://i.pravatar.cc/150?img=8",
      gallery: [Images.Banner7, Images.Banner8, Images.Banner9],
    },
  ];

  return (
    <div className="p-4 sm:p-6">
      {/* Responsive grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Render each profile card */}
        {users.map((user, idx) => (
          <ProfileCard key={idx} {...user} />
        ))}
      </div>
    </div>
  );
}
