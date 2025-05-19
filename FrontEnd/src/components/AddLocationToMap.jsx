import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

export default function AddLocationToMap({ onLocationSelect }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [locationData, setLocationData] = useState({
    lat: null,
    lng: null,
    locationName: "",
    distance: null,
    duration: null,
  });
  const [routingControl, setRoutingControl] = useState(null);

  const frontGate = L.latLng(6.795066273114094, 79.90075349807745);
  const backGate = L.latLng(6.798574, 79.90103);

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
    }).setView([6.795066273114094, 79.90075349807745], 17);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Mark gates
    L.marker(frontGate).addTo(map).bindPopup("UOM Front Gate").openPopup();
    L.marker(backGate).addTo(map).bindPopup("UOM Back Gate");

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

      if (routingControl) {
        map.removeControl(routingControl);
      }

      const startPoint = L.latLng(lat, lng);

      const getRouteInfo = (toGate) => {
        return new Promise((resolve) => {
          const tempControl = L.Routing.control({
            waypoints: [startPoint, toGate],
            router: L.Routing.osrmv1({ profile: "foot" }),
            routeWhileDragging: false,
            addWaypoints: false,
            draggableWaypoints: false,
            show: false,
          }).addTo(map);

          tempControl.on("routesfound", function (e) {
            const route = e.routes[0];
            const distance = route.summary.totalDistance;
            const duration = route.summary.totalTime;
            map.removeControl(tempControl);
            resolve({ distance, duration, gate: toGate });
          });
        });
      };

      Promise.all([getRouteInfo(frontGate), getRouteInfo(backGate)]).then(
        ([front, back]) => {
          const shorter = front.distance < back.distance ? front : back;

          console.log("Shortest Route:");
          console.log("Distance (m):", shorter.distance);
          console.log(
            "Estimated Time (min):",
            (shorter.duration / 60).toFixed(2)
          );

          const newRoutingControl = L.Routing.control({
            waypoints: [startPoint, shorter.gate],
            router: L.Routing.osrmv1({ profile: "foot" }),
            routeWhileDragging: false,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            show: false,
          }).addTo(map);

          setRoutingControl(newRoutingControl);

          const updatedData = {
            lat,
            lng,
            locationName: "",
            distance: shorter.distance,
            duration: shorter.duration,
          };

          setLocationData(updatedData);
          onLocationSelect(updatedData);
        }
      );
    });

    return () => {
      map.off();
      map.remove();
    };
  }, []);

  const handleNameChange = (e) => {
    const updatedData = { ...locationData, locationName: e.target.value };
    setLocationData(updatedData);

    if (selectedMarker) {
      selectedMarker
        .bindPopup(e.target.value || "Selected Location")
        .openPopup();
    }

    onLocationSelect(updatedData);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold addPlace-Text">Select Boarding Location</h2>
      <div
        id="map"
        className="w-full h-[400px] rounded-xl shadow-md border border-gray-300"
      ></div>

      {selectedMarker && (
        <div className="mt-4 addPlace-b p-4 rounded shadow border">
          <label className="block font-medium addPlace-Text mb-2">
            Name of Location:
          </label>
          <input
            type="text"
            value={locationData.locationName}
            onChange={handleNameChange}
            placeholder="e.g., Green View Boarding"
            className="addPlace-Text w-full border custom-border rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus"
            
          />
        </div>
      )}
    </div>
  );
}
