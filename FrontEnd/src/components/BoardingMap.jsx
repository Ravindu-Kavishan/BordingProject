import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function BoardingMap() {
  useEffect(() => {
    const existingMap = L.DomUtil.get("map");
    if (existingMap && existingMap._leaflet_id) {
      existingMap._leaflet_id = null;
    }

    // Check if map is already initialized and remove it
    if (document.getElementById("map")?._leaflet_id != null) {
      const oldMap = L.map(document.getElementById("map"));
      oldMap.remove();
    }

    const map = L.map("map", {
      scrollWheelZoom: true,
      zoomControl: true,
      doubleClickZoom: true,
      dragging: true,
      touchZoom: true,
    }).setView([6.7962, 79.9007], 17); // Coordinates near University of Moratuwa

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Set map boundaries to prevent scrolling too far
    map.setMaxBounds([
      [6.79, 79.89], // Southwest corner
      [6.80, 79.91], // Northeast corner
    ]);

    // Optional: add a marker for University of Moratuwa
    L.marker([6.7962, 79.9007])
      .addTo(map)
      .bindPopup("University of Moratuwa")
      .openPopup();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Boarding Locations Map</h2>
      <div
        id="map"
        style={{ height: "400px", width: "100%", borderRadius: "10px" }}
      ></div>
    </div>
  );
}
