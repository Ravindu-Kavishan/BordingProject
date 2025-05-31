import React, { useState, useEffect } from "react";
import DynamicFormField from "../components/DynamicFormField";
import {
  ThumbnailUploader,
  ImagesUploader,
} from "../components/ImageUploarder";
import dataService from "../services/dataService";
import ErrorAlert from "../components/ErrorAllert";
import { useSelector } from "react-redux";
import SuccessMSG from "../components/SuccessMSG";

export default function AddBordingPlace() {
  const initialFormState = {
    locationName: "",
    type: "",
    availability: 0,
    forWhome: "",
    gate: "",
    street: "",
    Location_Link: "",
    doubleBeds: 0,
    singleBeds: 0,
    chairs: 0,
    tables: 0,
    clothRacks: 0,
    bathrooms: 0,
    showers: 0,
    toilets: 0,
    commodes: 0,
    bathrooms_are_dedicated_for: 0,
    descreption_about_bathrooms: "",
    light_bill: "",
    water_bill: "",
    special_features: "",
    description: "",
    price: 0,
    thumbnailUrl: "",
    imageUrls: [],
  };

  const [formData, setFormData] = useState(initialFormState);

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const dark = useSelector((state) => state.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [gateLocationLink, setGateLocationLink] = useState(
    "https://www.google.com/maps?q=6.795066273114094,79.90075349807745"
  );
  useEffect(() => {
    if (formData.gate === "Back_Gate_of_UOM") {
      setGateLocationLink("https://www.google.com/maps?q=6.798538,79.901047");
    } else if (formData.gate === "Frount_Gate_of_UOM") {
      setGateLocationLink(
        "https://www.google.com/maps?q=6.795066273114094,79.90075349807745"
      );
    }
  }, [formData.gate]);

  const fields = [
    { label: "Location Name", name: "locationName", type: "text" },
    {
      label: "Boarding Place Type",
      name: "type",
      type: "select",
      options: ["House", "One floor with rooms", "Room"],
    },
    { label: "Availability", name: "availability", type: "number" },
    {
      label: "Boarding Place For",
      name: "forWhome",
      type: "select",
      options: ["Boys", "Girls", "Both Ok"],
    },
    {
      label: "Gate",
      name: "gate",
      type: "select",
      options: ["Frount Gate", "Back Gate"],
    },
    { label: "Street", name: "street", type: "text" },
    {
      label: "Location Link",
      name: "Location_Link",
      type: "text",
      extraElement: (
        <a
          href={gateLocationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm hover:underline ml-2"
        >
          Open Google Maps
        </a>
      ),
    },

    { label: "Number of Double Beds", name: "doubleBeds", type: "number" },
    { label: "Number of Single Beds", name: "singleBeds", type: "number" },
    { label: "Number of Chairs", name: "chairs", type: "number" },
    { label: "Number of Tables", name: "tables", type: "number" },
    { label: "Number of Cloth Racks", name: "clothRacks", type: "number" },
    { label: "Number of Bathrooms", name: "bathrooms", type: "number" },
    { label: "Number of Showers", name: "showers", type: "number" },
    { label: "Number of Toilets", name: "toilets", type: "number" },
    { label: "Number of Commodes", name: "commodes", type: "number" },
    {
      label: "Bathrooms are dedicated for",
      name: "bathrooms_are_dedicated_for",
      type: "number",
    },
    {
      label: "Descreption About Bathrooms",
      name: "descreption_about_bathrooms",
      type: "textarea",
      required: false,
      rows: 5,
    },
    {
      label: "light bill",
      name: "light_bill",
      type: "select",
      options: ["Free of Charge", "Should Pay By Students"],
    },
    {
      label: "water bill",
      name: "water_bill",
      type: "select",
      options: ["Free of Charge", "Should Pay By Students"],
    },
    {
      label: "Special Features",
      name: "special features",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    const result = await dataService.AddPlaceDetails(formData);
    if (result.success) {
      setErrorMsg("");
      setSuccessMsg("Plase added successsfull.");
      setFormData(initialFormState);
    } else {
      setSuccessMsg("");
      setErrorMsg(result.message);
    }
  };

  return (
    <div className="secondry-bg max-w-screen pt-10">
      {successMsg && (
        <div className="flex items-center justify-center px-4 py-2 b  sticky top-0 z-50">
          <SuccessMSG message={successMsg} />
        </div>
      )}
      {errorMsg && (
        <div className="flex items-center justify-center px-4 py-2 b  sticky top-0 z-50">
          <ErrorAlert message={errorMsg} />
        </div>
      )}

      <div className="max-w-2xl mx-auto p-6 addPlace-bg rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center addPlace-Text">
          Add Boarding Place
        </h2>
        <div className="space-y-4">
          {fields.map((field) => (
            <DynamicFormField
              key={field.name}
              field={field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ))}

          {/* Upload thumbnail and update formData */}
          <ThumbnailUploader
            onUpload={(url) =>
              setFormData((prev) => ({ ...prev, thumbnailUrl: url }))
            }
          />

          {/* Upload multiple images and update formData */}
          <ImagesUploader
            onUpload={(urls) =>
              setFormData((prev) => ({ ...prev, imageUrls: urls }))
            }
          />

          <button
            type="submit"
            className="w-full addPlace-button addPlace-buttonText py-2 px-4 rounded transition"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
