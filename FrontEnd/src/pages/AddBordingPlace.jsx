import React, { useState } from "react";
import DynamicFormField from "../components/DynamicFormField";

export default function AddBordingPlace() {
  const [formData, setFormData] = useState({
    locationName: "",
    type: "",
    availability: "",
    forWhome: "",
    gate: "",
    street: "",
    Location_Link: "", 
    doubleBeds: "",
    singleBeds: "",
    chairs: "",
    tables: "",
    clothRacks: "",
    bathrooms: "",
    showers: "",
    toilets: "",
    commodes: "",
    bathrooms_are_dedicated_for:"",
    descreption_about_bathrooms:"",
    special_features: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fields = [
    { label: "Location Name", name: "locationName", type: "text" },
    {
      label: "Boarding Place Type",
      name: "type",
      type: "select",
      options: ["House", "One_floor_with_rooms", "Room"],
    },
    { label: "Availability", name: "availability", type: "number" },
    {
      label: "Boarding Place For",
      name: "forWhome",
      type: "select",
      options: ["Male", "Female", "Both_Ok"],
    },
    {
      label: "Gate",
      name: "gate",
      type: "select",
      options: ["Frount_Gate_of_UOM", "Back_Gate_of_UOM"],
    },
    { label: "Street", name: "street", type: "text" },
    { label: "Location Link", name: "Location_Link", type: "text" },
    { label: "Number of Double Beds", name: "doubleBeds", type: "number" },
    { label: "Number of Single Beds", name: "singleBeds", type: "number" },
    { label: "Number of Chairs", name: "chairs", type: "number" },
    { label: "Number of Tables", name: "tables", type: "number" },
    { label: "Number of Cloth Racks", name: "clothRacks", type: "number" },
    { label: "Number of Bathrooms", name: "bathrooms", type: "number" },
    { label: "Number of Showers", name: "showers", type: "number" },
    { label: "Number of Toilets", name: "toilets", type: "number" },
    { label: "Number of Commodes", name: "commodes", type: "number" },
    { label: "Bathrooms are dedicated for", name: "bathrooms_are_dedicated_for", type: "number" },
    {
      label: "Descreption About Bathrooms",
      name: "descreption_about_bathrooms",
      type: "textarea",
      required: false,
      rows: 5,
    },
    {
      label: "Special Features",
      name: "special_features",
      type: "textarea",
      required: false,
      rows: 5,
    },
    {
      label: "Description",
      name: "description",
      type: "textarea",
      required: false,
      rows: 5,
    },
    { label: "Price (LKR)", name: "price", type: "number" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="secondry-bg max-w-screen pt-10">
      <div className="max-w-2xl mx-auto p-6 addPlace-bg rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center addPlace-Text">
          Add Boarding Place
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <DynamicFormField
              key={field.name}
              field={field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ))}
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
