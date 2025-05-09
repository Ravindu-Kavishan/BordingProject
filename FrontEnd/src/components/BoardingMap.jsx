import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

export default function BoardingMap() {
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
    }).setView([6.7962, 79.9007], 17); // University of Moratuwa

    // Add tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Limit map to Katubedda region
    map.setMaxBounds([
      [6.79, 79.89], // Southwest
      [6.80, 79.91], // Northeast
    ]);

    // Add marker for University of Moratuwa
    const uniLatLng = [6.7962, 79.9007];
    L.marker(uniLatLng)
      .addTo(map)
      .bindPopup("University of Moratuwa")
      .openPopup();

    // Example: boarding place nearby
    const boardingLocation = [6.7955, 79.902]; // Example location

    // Add route with Leaflet Routing Machine
    L.Routing.control({
      waypoints: [L.latLng(uniLatLng), L.latLng(boardingLocation)],
      routeWhileDragging: false,
      draggableWaypoints: false,
      addWaypoints: false,
      showAlternatives: false,
      createMarker: () => null, // Hide default markers
    })
      .on("routesfound", function (e) {
        const route = e.routes[0];
        const summary = route.summary;
        console.log(
          `Distance: ${(summary.totalDistance / 1000).toFixed(2)} km`
        );
        console.log(
          `Estimated Time: ${(summary.totalTime / 60).toFixed(1)} minutes`
        );
      })
      .addTo(map);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Boarding Locations Map</h2>
      <div
        id="map"
        className="w-full h-[400px] rounded-xl shadow-md border border-gray-300"
      ></div>
      <style>
        {`
          .leaflet-routing-container {
            color: black !important;
            background-color: rgba(255, 255, 255, 0.95);
            padding: 6px;
            font-size: 14px;
            border-radius: 8px;
            box-shadow: 0 0 6px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </div>
  );
}
