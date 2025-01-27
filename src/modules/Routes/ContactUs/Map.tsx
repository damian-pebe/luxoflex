import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    const map = L.map("map", { zoomControl: false }).setView(
      [20.62391219402623, -103.35026599913583],
      13
    );

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
      }).addTo(map);

    // dark mode
    // L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    //     attribution:
    //       '&copy; <a href="https://carto.com/">CARTO</a> contributors &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    //   }).addTo(map);

    const marker = L.marker([20.64791219402623, -103.35026599913583]).addTo(map);
    marker.bindPopup("LUXOFLEX");
    marker.openPopup();

    // Add onClick event to open the popup
    marker.on('click', () => {
      window.open('https://maps.app.goo.gl/TtJRRY97rhED6eJ77');
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default MapComponent;
