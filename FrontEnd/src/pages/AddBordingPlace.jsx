import React, { useState } from "react";
import AddLocationToMap from "../components/AddLocationToMap";

export default function AddBordingPlace() {
  const [formData, setFormData] = useState({
    type: "",
    availability: "",
    gender: "",
    gate: "",
    street: "",
    description: "",
    lat: "",
    lng: "",
    locationName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationSelect = ({ lat, lng, locationName }) => {
    setFormData((prev) => ({
      ...prev,
      lat: lat.toFixed(6),
      lng: lng.toFixed(6),
      locationName,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can now send `formData` to your backend or handle it further
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add Boarding Place
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type Selection */}
        <div>
          <label className="block mb-1 font-medium">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select type</option>
            <option value="house">House</option>
            <option value="room">Room</option>
            <option value="one_floor_with_rooms">One floor with rooms</option>
          </select>
        </div>

        {/* Availability */}
        <div>
          <label className="block mb-1 font-medium">
            Availability (Number)
          </label>
          <input
            type="number"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            min="1"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Gender Selection */}
        <div>
          <label className="block mb-1 font-medium">For</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select</option>
            <option value="girls">Girls</option>
            <option value="boys">Boys</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Gate</label>
          <select
            name="gate"
            value={formData.gate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select</option>
            <option value="Frount Gate">Frount Gate</option>
            <option value="Back Gate">Back Gate</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Street</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>
        <AddLocationToMap onLocationSelect={handleLocationSelect} />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
