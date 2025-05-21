import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BoardingMap from "../components/BoardingMap";
import dataService from "../services/dataService";

export default function PlaceDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [owner, setOwner] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const fetchPlaceDetails = async () => {
      const response = await dataService.getPlaceDetails({ bordingId: id });
      if (response.success) {
        const place = response.data.data.placeData;
        const owner = response.data.data.ownerData;

        setPlace(place);
        setOwner(owner);
        setCurrentIndex(0); 
      } else {
        console.error(response.message);
      }
    };

    fetchPlaceDetails();
  }, [id]);

  useEffect(() => {
    if (!Array.isArray(place.images) || place.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === place.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [place.images]);

  return (
    <div className="primary-bg min-h-screen primary-text">
      <div className="p-4 max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold underline text-center">
          {place.locationName}
        </h1>

        <div className="relative w-full h-[250px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg">
          {place.images && place.images.length > 0 ? (
            <img
              src={place.images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover transition duration-700 ease-in-out"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-xl text-gray-500">
              No Images Available
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {place.images &&
            place.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`h-24 sm:h-32 w-full object-cover rounded-lg border ${
                  index === currentIndex ? "border-blue-500" : "custom-border"
                } cursor-pointer hover:opacity-80`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="secondry-bg backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 primary-text flex items-center gap-2">
              🏠 Place Information
            </h2>
            <ul className="space-y-3 text-base sm:text-lg">
              <li>
                <span className="font-semibold primary-text">🏷️ Type:</span>{" "}
                {place.type}
              </li>
              <li>
                <span className="font-semibold primary-text">🛏️ Availability:</span>{" "}
                {place.availablity} rooms
              </li>
              <li>
                <span className="font-semibold primary-text">👥 For:</span>{" "}
                {place.forWhome}
              </li>
              <li>
                <span className="font-semibold primary-text">📍 Street:</span>{" "}
                {place.street}
              </li>
              <li>
                <span className="font-semibold primary-text">🚪 Gate:</span>{" "}
                {place.gate}
              </li>
              <li>
                <span className="font-semibold primary-text">💰 Price:</span>{" "}
                {place.price}
              </li>
            </ul>
          </div>

          <div className="secondry-bg backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 primary-text flex items-center gap-2">
              👤 Owner Contact
            </h2>
            <ul className="space-y-3 text-base sm:text-lg">
              <li>
                <span className="font-semibold primary-text">🧑 Name:</span>{" "}
                {owner.name}
              </li>
              <li>
                <span className="font-semibold primary-text">📞 Phone:</span>{" "}
                {owner.conatactno}
              </li>
              <li>
                <span className="font-semibold primary-text">💬 WhatsApp:</span>{" "}
                {owner.wahtsapptno}
              </li>
              <li>
                <span className="font-semibold primary-text">✉️ Email:</span>{" "}
                {owner.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="secondry-bg backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 primary-text flex items-center gap-2">
            📝 Description
          </h2>
          <ul className="space-y-3 text-base sm:text-lg">
            <li>
              <span className="font-semibold primary-text">🧾 Info:</span>{" "}
              {place.description}
            </li>
          </ul>
        </div>

        <div className="secondry-bg backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 primary-text flex items-center gap-2">
            📝 Location
          </h2>

        </div>

        <BoardingMap placeLat={6.793} placeLng={79.8995} />
      </div>
    </div>
  );
}
