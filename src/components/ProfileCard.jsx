// src/components/ProfileCard.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // SwiperJS for carousel
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // modules for features
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ ProfileCard Component
export default function ProfileCard({ name, role, description, avatar, gallery }) {
  return (
    <div className="bg-white border rounded-2xl shadow-sm overflow-hidden flex flex-col transition hover:shadow-lg hover:-translate-y-1 duration-200">
      {/* --- Top Image Carousel Section --- */}
      <div className="relative w-full h-40">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          {/* Loop through the gallery images */}
          {gallery.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="w-full h-40 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- Profile Info Section --- */}
      <div className="p-4 flex flex-col items-center text-center">
        {/* Avatar overlaps the carousel slightly */}
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full border-4 border-white -mt-10 shadow-md object-cover"
        />

        {/* Name and role */}
        <h2 className="mt-3 font-semibold text-gray-900 text-lg">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 leading-snug">{description}</p>
      </div>

      {/* --- Action Buttons --- */}
      <div className="p-4 flex flex-col gap-2">
        {/* Primary button (Connect) */}
        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
          Connect
        </button>

        {/* Secondary button (View Profile) */}
        <button className="w-full border border-gray-300 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition">
          View Profile
        </button>
      </div>
    </div>
  );
}
