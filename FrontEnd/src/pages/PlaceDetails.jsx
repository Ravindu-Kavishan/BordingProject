import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Place Information
            </h2>

            <div className="space-y-3 text-base r">
              <div className="flex justify-between">
                <span className="font-semibold">Type:</span>
                <span>{place.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Available:</span>
                <span>{place.availability} people</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Suitable For:</span>
                <span>{place.forWhome}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Street:</span>
                <span>{place.street}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Gate:</span>
                <span>{place.gate}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Google Map:</span>
                <a
                  href={place.Location_Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500"
                >
                  View Location
                </a>
              </div>
            </div>
          </div>

          {/* Owner Info */}
          <div className="secondry-bg p-6 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Owner Contact
            </h2>

            <div className="space-y-3 text-base">
              <div className="flex justify-between">
                <span className="font-semibold">Name:</span>
                <span>{owner.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Phone:</span>
                <span>{owner.contactNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">WhatsApp:</span>
                <span>{owner.whatsappNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Email:</span>
                <span>{owner.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="secondry-bg p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">Features</h2>
          <div className="grid sm:grid-cols-2 gap-x-40 gap-y-6 text-base">
            <div className="flex justify-between">
              <span className="font-semibold">Double Beds:</span>
              <span>{place.doubleBeds}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Single Beds:</span>
              <span>{place.singleBeds}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Chairs:</span>
              <span>{place.chairs}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Tables:</span>
              <span>{place.tables}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Cloth Racks:</span>
              <span>{place.clothRacks}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Bathrooms:</span>
              <span>{place.bathrooms}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Showers:</span>
              <span>{place.showers}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Toilets:</span>
              <span>{place.toilets}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Commodes:</span>
              <span>{place.commodes}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Dedicated For:</span>
              <span>{place.bathrooms_are_dedicated_for}</span>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="secondry-bg p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Pricing & Utilities
          </h2>
          <div className="grid sm:grid-cols-3 gap-x-12 gap-y-6 text-base">
            <div className="flex justify-between">
              <span className="font-semibold">Monthly Rent:</span>
              <span>Rs. {place.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Light Bill:</span>
              <span>Rs. {place.light_bill}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Water Bill:</span>
              <span>Rs. {place.water_bill}</span>
            </div>
          </div>
        </div>

        <div className="secondry-bg p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Special Features</h2>
          <p className="text-base">{place.special_features}</p>
        </div>


        <div className="secondry-bg p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Bathroom Description</h2>
          <p className="text-base"> {place.descreption_about_bathrooms}</p>
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
