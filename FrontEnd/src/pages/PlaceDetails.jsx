import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BoardingMap from "../components/BoardingMap";
import { useSelector } from "react-redux";
import dataService from "../services/dataService";

export default function PlaceDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [owner, setOwner] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const dark = useSelector((state) => state.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

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
    if (!Array.isArray(place.imageUrls) || place.imageUrls.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === place.imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [place.imageUrls]);

  return (
    <div className="primary-bg min-h-screen primary-text">
      <div className="p-4 max-w-6xl mx-auto space-y-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center underline">
          {place.locationName}
        </h1>

        {/* Image Carousel */}
        <div className="relative w-full h-[250px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg">
          {place.imageUrls && place.imageUrls.length > 0 ? (
            <img
              src={place.imageUrls[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover transition duration-700 ease-in-out"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-xl text-gray-500">
              No images available
            </div>
          )}
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {place.imageUrls?.map((image, index) => (
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

        {/* Info Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Place Info */}
          <div className="secondry-bg p-6 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Place Information</h2>
            <div className="space-y-3 text-base">
              <div>
                <strong>Type:</strong> {place.type}
              </div>
              <div>
                <strong>Available:</strong> {place.availability} people
              </div>
              <div>
                <strong>Suitable For:</strong> {place.forWhome}
              </div>
              <div>
                <strong>Street:</strong> {place.street}
              </div>
              <div>
                <strong>Gate:</strong> {place.gate}
              </div>
              <div>
                <strong>Google Map:</strong>{" "}
                <a
                  href={place.Location_Link}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View Location
                </a>
              </div>
            </div>
          </div>

          {/* Owner Info */}
          <div className="secondry-bg p-6 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Owner Contact</h2>
            <div className="space-y-3 text-base">
              <div>
                <strong>Name:</strong> {owner.name}
              </div>
              <div>
                <strong>Phone:</strong> {owner.contactNumber}
              </div>
              <div>
                <strong>WhatsApp:</strong> {owner.whatsappNumber}
              </div>
              <div>
                <strong>Email:</strong> {owner.email}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="secondry-bg p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-base">
            <div>
              <strong>Double Beds:</strong> {place.doubleBeds}
            </div>
            <div>
              <strong>Single Beds:</strong> {place.singleBeds}
            </div>
            <div>
              <strong>Chairs:</strong> {place.chairs}
            </div>
            <div>
              <strong>Tables:</strong> {place.tables}
            </div>
            <div>
              <strong>Cloth Racks:</strong> {place.clothRacks}
            </div>
            <div>
              <strong>Bathrooms:</strong> {place.bathrooms}
            </div>
            <div>
              <strong>Showers:</strong> {place.showers}
            </div>
            <div>
              <strong>Toilets:</strong> {place.toilets}
            </div>
            <div>
              <strong>Commodes:</strong> {place.commodes}
            </div>
            <div>
              <strong>Dedicated For:</strong>{" "}
              {place.bathrooms_are_dedicated_for}
            </div>
            <div>
              <strong>Bathroom Description:</strong>{" "}
              {place.descreption_about_bathrooms}
            </div>
            <div>
              <strong>Special Features:</strong> {place.special_features}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="secondry-bg p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Pricing & Utilities</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-base">
            <div>
              <strong>Monthly Rent:</strong> Rs. {place.price}
            </div>
            <div>
              <strong>Light Bill:</strong> Rs. {place.light_bill}
            </div>
            <div>
              <strong>Water Bill:</strong> Rs. {place.water_bill}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="secondry-bg p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-base">{place.description}</p>
        </div>
      </div>
    </div>
  );
}
