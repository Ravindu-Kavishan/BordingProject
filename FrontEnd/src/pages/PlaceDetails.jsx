import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import BoardingMap from "../components/BoardingMap";

export default function PlaceDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const place = {
    images: [
      "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
      "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
      "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
      "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
      "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
      "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
    ],
    name: "Place One",
    type: "Apartment",
    availablity: 3,
    description: "Cozy 2-bedroom apartment near campus.",
    forWhome: "Students",
    location: "123 Main Street, City Name",
    owner: {
      conatactno: "0742959366",
      wahtsapptno: "0742959366",
      email: "example@uom.lk",
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === place.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [place.images.length]);

  return (
    <div className="primary-bg min-h-screen text-white">
      <NavBar />
      <div className="flex">
        <div className="hidden md:block">
          <SideBar />
        </div>

        <div className="p-4 max-w-6xl mx-auto space-y-6">
          <p className="text-gray-400 text-sm">ID: {id}</p>
          <h1 className="text-4xl font-bold underline text-center">
            {place.name}
          </h1>

          {/* Slideshow */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={place.images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover transition duration-700 ease-in-out"
            />
          </div>

          {/* Small thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
            {place.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="h-32 w-full object-cover rounded-lg border border-white/20 cursor-pointer hover:opacity-80"
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Place Info */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Place Information Card */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
              <h2 className="text-3xl font-bold mb-4 text-emerald-300 flex items-center gap-2">
                🏡 Place Information
              </h2>
              <ul className="space-y-3 text-lg">
                <li>
                  <span className="font-semibold text-white/80">🏷 Type:</span>{" "}
                  {place.type}
                </li>
                <li>
                  <span className="font-semibold text-white/80">
                    🛏 Availability:
                  </span>{" "}
                  {place.availablity} rooms
                </li>
                <li>
                  <span className="font-semibold text-white/80">🎯 For:</span>{" "}
                  {place.forWhome}
                </li>
                <li>
                  <span className="font-semibold text-white/80">
                    📍 Location:
                  </span>{" "}
                  {place.location}
                </li>
                
              </ul>
            </div>

            {/* Owner Contact Card */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
              <h2 className="text-3xl font-bold mb-4 text-cyan-300 flex items-center gap-2">
                👤 Owner Contact
              </h2>
              <ul className="space-y-3 text-lg">
                <li>
                  <span className="font-semibold text-white/80">📞 Phone:</span>{" "}
                  {place.owner.conatactno}
                </li>
                <li>
                  <span className="font-semibold text-white/80">
                    💬 WhatsApp:
                  </span>{" "}
                  {place.owner.wahtsapptno}
                </li>
                <li>
                  <span className="font-semibold text-white/80">✉️ Email:</span>{" "}
                  {place.owner.email}
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
            <h2 className="text-3xl font-bold mb-4 text-emerald-300 flex items-center gap-2">
              🏡 Description
            </h2>
            <ul className="space-y-3 text-lg">
              
              <li>
                <span className="font-semibold text-white/80">
                  📝 Description:
                </span>{" "}
                {place.description}
              </li>
            </ul>
          </div>

          <BoardingMap placeLat={6.793} placeLng={79.8995} />

        </div>
      </div>
    </div>
  );
}
