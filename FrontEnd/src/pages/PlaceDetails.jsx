import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function PlaceDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const place = {
    title: "Place One",
    imagers: [
      "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
      "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
      "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === place.imagers.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [place.imagers.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? place.imagers.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === place.imagers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="primary-bg min-h-screen">
      <NavBar />
      <div className="flex">
        <div className="hidden md:block">
          <SideBar />
        </div>
        <div className="flex-1 p-4">
          <p className="text-gray-400 text-sm mb-2">ID: {id}</p>
          <h1 className="text-3xl font-bold mb-6 text-center primary-text underline">{place.title}</h1>

          {/* Slideshow */}
          <div className="relative max-w-3xl mx-auto">
            <img
              src={place.imagers[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-[400px] object-cover rounded-xl transition duration-700 ease-in-out shadow-lg"
            />
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 secondry-bg p-2 rounded-full shadow"
            >
              ◀
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 secondry-bg p-2 rounded-full shadow"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
