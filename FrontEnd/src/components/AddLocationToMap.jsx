import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

export default function AddLocationToMap({ onLocationSelect }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [locationData, setLocationData] = useState({ lat: null, lng: null, locationName: "" });

  useEffect(() => {
    const existingMap = L.DomUtil.get("map");
    if (existingMap && existingMap._leaflet_id) {
      existingMap._leaflet_id = null;
    }

    const map = L.map("map", {
      scrollWheelZoom: true,
      zoomControl: true,
      doubleClickZoom: true,
      dragging: true,
      touchZoom: true,
    }).setView([6.7962, 79.9007], 17);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // map.setMaxBounds([
    //   [6.79, 79.89],
    //   [6.8, 79.91],
    // ]);

    const uniFrountLatLng = [6.7962, 79.9007];
    L.marker(uniFrountLatLng).addTo(map).bindPopup("UOM Frount Gate").openPopup();
    const uniBackLatLng = [6.798574, 79.901030];
    L.marker(uniBackLatLng).addTo(map).bindPopup("UOM Back Gate").openPopup();

    const style = document.createElement("style");
    style.innerHTML = `.leaflet-routing-container { display: none !important; }`;
    document.head.appendChild(style);

    map.on("click", function (e) {
      const { lat, lng } = e.latlng;

      if (selectedMarker) {
        map.removeLayer(selectedMarker);
      }

      const marker = L.marker([lat, lng])
        .addTo(map)
        .bindPopup("Selected Location")
        .openPopup();

      setSelectedMarker(marker);
      setLocationData({ lat, lng, name: "" }); // reset name
    });

    return () => {
      map.off();
      map.remove();
    };
  }, []);

  // Handle name input
  const handleNameChange = (e) => {
    const updatedData = { ...locationData, locationName: e.target.value };
    setLocationData(updatedData);

    // Update marker popup
    if (selectedMarker) {
      selectedMarker.bindPopup(e.target.value || "Selected Location").openPopup();
    }

    // Send full data to parent
    onLocationSelect(updatedData);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Select Boarding Location</h2>
      <div
        id="map"
        className="w-full h-[400px] rounded-xl shadow-md border border-gray-300"
      ></div>

      {selectedMarker && (
        <div className="mt-4 bg-white p-4 rounded shadow border">
          <label className="block font-medium text-gray-700 mb-2">
            Name of Location:
          </label>
          <input
            type="text"
            value={locationData.locationName}
            onChange={handleNameChange}
            placeholder="e.g., Green View Boarding"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      )}
    </div>
  );
}
