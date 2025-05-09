import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

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
      minZoom: 16,
      maxZoom: 18,
    }).setView([6.7962, 79.9007], 17);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Example boarding place
    const boardingLocation = [6.7980, 79.9025]; // Replace with actual coords

    // Draw route
    L.Routing.control({
      waypoints: [
        L.latLng(6.7962, 79.9007), // University of Moratuwa
        L.latLng(...boardingLocation),
      ],
      routeWhileDragging: false,
      draggableWaypoints: false,
      addWaypoints: false,
      showAlternatives: false,
    }).addTo(map);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Boarding Location Route</h2>
      <div
        id="map"
        style={{ height: "400px", width: "100%", borderRadius: "10px" }}
      ></div>
    </div>
  );
}
