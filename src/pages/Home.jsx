// src/pages/Home.jsx
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  const users = [
    {
      name: "Adeoya AyoKunle",
      role: "Frontend Developer",
      description:
        "I am a designer and frontend dev with 2 years of experience. I am happy to connect and work with designers.",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Jane Doe",
      role: "Backend Developer",
      description:
        "Specializing in Node.js & databases. Open to collaborate on backend-heavy projects.",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Michael Smith",
      role: "Mobile Developer",
      description:
        "React Native developer passionate about building user-friendly mobile apps.",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, idx) => (
          <ProfileCard key={idx} {...user} />
        ))}
      </div>

    </div>
  );
}
