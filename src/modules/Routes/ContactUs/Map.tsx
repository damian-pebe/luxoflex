import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView([51.505, -0.09], 13); // Centered at London, zoom level 13

    // Add a tile layer (OpenStreetMap by default)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker
    L.marker([51.505, -0.09]).addTo(map).bindPopup("A sample marker").openPopup();

    return () => {
      map.remove(); // Clean up map on component unmount
    };
  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default MapComponent;
