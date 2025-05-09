import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

export default function BoardingMap() {
  const [routeSteps, setRouteSteps] = useState([]);

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

    const uniLatLng = [6.7962, 79.9007];
    const boardingLocation = [6.7955, 79.902];

    L.marker(uniLatLng).addTo(map).bindPopup("University of Moratuwa").openPopup();

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(uniLatLng), L.latLng(boardingLocation)],
      routeWhileDragging: false,
      draggableWaypoints: false,
      addWaypoints: false,
      showAlternatives: false,
      createMarker: () => null,
    })
      .on("routesfound", function (e) {
        const route = e.routes[0];
        const summary = route.summary;

        console.log(`Distance: ${(summary.totalDistance / 1000).toFixed(2)} km`);
        console.log(`Time: ${(summary.totalTime / 60).toFixed(1)} min`);

        const instructions = route.instructions.map((step, index) => ({
          text: step.text,
          distance: step.distance,
        }));

        console.log("Steps:", instructions);
        setRouteSteps(instructions);
      })
      .addTo(map);

    // Hide the default routing container
    const style = document.createElement("style");
    style.innerHTML = `.leaflet-routing-container { display: none !important; }`;
    document.head.appendChild(style);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Boarding Locations Map</h2>
      <div
        id="map"
        className="w-full h-[400px] rounded-xl shadow-md border border-gray-300"
      ></div>

      <div className="mt-4 p-4 bg-white rounded-lg shadow border border-gray-200">
        <h3 className="font-semibold text-lg mb-2">Route Instructions</h3>
        <ol className="list-decimal pl-6 text-sm space-y-1">
          {routeSteps.map((step, index) => (
            <li key={index}>
              {step.text}{" "}
              <span className="text-gray-500">
                ({(step.distance).toFixed(1)} m)
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
