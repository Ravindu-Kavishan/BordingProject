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
    price:"",
    lat: "",
    lng: "",
    locationName: "",
    distance: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationSelect = ({
    lat,
    lng,
    locationName,
    distance,
    duration,
  }) => {
    setFormData((prev) => ({
      ...prev,
      lat: lat.toFixed(6),
      lng: lng.toFixed(6),
      locationName,
      distance,
      duration,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can now send `formData` to your backend or handle it further
  };

  return (
    <div className=" secondry-bg max-w-screen pt-10 ">
      <div className="max-w-2xl mx-auto p-6 addPlace-bg rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center addPlace-Text">
          Add Boarding Place
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Type Selection */}
          <div>
            <label className=" addPlace-Text block mb-1 font-medium">
              Type <span className="text-red-500">*</span>
            
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border addPlace-inptborder rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus addPlace-Text"
              required
            >
              <option
                className="addPlace-selectbg addPlace-selectText"
                value=""
              >
                Select type
              </option>
              <option
                className="addPlace-selectbg addPlace-selectText"
                value="house"
              >
                House
              </option>
              <option
                className="addPlace-selectbg addPlace-selectText"
                value="room"
              >
                Room
              </option>
              <option
                className="addPlace-selectbg addPlace-selectText"
                value="one_floor_with_rooms"
              >
                One floor with rooms
              </option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className=" addPlace-Text block mb-1 font-medium">
              Availability (Number)
            <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              min="1"
              className="addPlace-Text w-full border addPlace-inptborder rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus"
              required
            />
          </div>

          {/* Gender Selection */}
          <div>
            <label className=" addPlace-Text block mb-1 font-medium">For
              <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className=" addPlace-Text w-full border addPlace-inptborder rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus"
              required
            >
              <option
                className="addPlace-selectbg addPlace-selectText"
                value=""
              >
                Select
              </option>
              <option
                className="addPlace-selectbg addPlace-selectText"
                value="girls"
              >
                Girls
              </option>
              <option
                className="addPlace-selectbg addPlace-selectText"
                value="boys"
              >
                Boys
              </option>
            </select>
          </div>

          <div>
            <label className=" addPlace-Text block mb-1 font-medium">
              Gate
            <span className="text-red-500">*</span>
            </label>
            <select
              name="gate"
              value={formData.gate}
              onChange={handleChange}
              className="addPlace-Text w-full border addPlace-inptborder rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus"
              required
            >
              <option
                className="addPlace-selectbg addPlace-selectText"
                value=""
              >
                Select
              </option>
              <option
                className="addPlace-selectbg addPlace-selectText"
                value="Frount Gate"
              >
                Frount Gate
              </option>
              <option
                className="addPlace-selectbg addPlace-selectText"
                value="Back Gate"
              >
                Back Gate
              </option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className=" addPlace-Text block mb-1 font-medium">
              Street
            <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="addPlace-Text w-full border addPlace-inptborder rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className=" addPlace-Text block mb-1 font-medium">
              Description
            <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className=" addPlace-Text w-full border addPlace-inptborder rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus"
              required
            ></textarea>
          </div>

          <div>
            <label className=" addPlace-Text block mb-1 font-medium">
              Price (Rupees)
            <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="1"
              className="addPlace-Text w-full border addPlace-inptborder rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus"
              required
            />
          </div>

          <AddLocationToMap onLocationSelect={handleLocationSelect} />

          <div>
            <label className=" addPlace-Text  block mb-1 font-medium">
              Distance -(m)
            <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              className="addPlace-Text w-full border custom-border rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus"
              required
            />
          </div>
          <div>
            <label className=" addPlace-Text  block mb-1 font-medium">
              Duration - on foot(s)
            <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="addPlace-Text w-full border custom-border rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full addPlace-button addPlace-buttonText py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
