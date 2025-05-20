import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    <div className="primary-bg min-h-screen primary-text ">
      <div className="p-4 max-w-6xl mx-auto space-y-6">
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
              className="h-32 w-full object-cover rounded-lg border custom-border cursor-pointer hover:opacity-80"
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Place Info */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Place Information Card */}
          <div className="secondry-bg backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
            <h2 className="text-3xl font-bold mb-4 primary-text flex items-center gap-2">
              🏡 Place Information
            </h2>
            <ul className="space-y-3 text-lg">
              <li>
                <span className="font-semibold primary-text">🏷 Type:</span>{" "}
                {place.type}
              </li>
              <li>
                <span className="font-semibold primary-text">
                  🛏 Availability:
                </span>{" "}
                {place.availablity} rooms
              </li>
              <li>
                <span className="font-semibold primary-text">🎯 For:</span>{" "}
                {place.forWhome}
              </li>
              <li>
                <span className="font-semibold primary-text">📍 Location:</span>{" "}
                {place.location}
              </li>
            </ul>
          </div>

          {/* Owner Contact Card */}
          <div className="secondry-bg backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
            <h2 className="text-3xl font-bold mb-4 primary-text flex items-center gap-2">
              👤 Owner Contact
            </h2>
            <ul className="space-y-3 text-lg">
              <li>
                <span className="font-semibold primary-text">📞 Phone:</span>{" "}
                {place.owner.conatactno}
              </li>
              <li>
                <span className="font-semibold primary-text">💬 WhatsApp:</span>{" "}
                {place.owner.wahtsapptno}
              </li>
              <li>
                <span className="font-semibold primary-text">✉️ Email:</span>{" "}
                {place.owner.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="secondry-bg backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
          <h2 className="text-3xl font-bold mb-4 primary-text flex items-center gap-2">
            🏡 Description
          </h2>
          <ul className="space-y-3 text-lg">
            <li>
              <span className="font-semibold primary-text">
                📝 Description:
              </span>{" "}
              {place.description}
            </li>
          </ul>
        </div>

        <BoardingMap placeLat={6.793} placeLng={79.8995} />
      </div>
    </div>
  );
}
