import { useState, useEffect } from "react";

const API_KEY = "55aedacb7b124cdbb6b100400253003"; // Replace with your API key

export default function WeatherCard({ lat, lon }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!lat || !lon) return;

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setLoading(false);
      });
  }, [lat, lon]);

  if (loading) return <div>Loading weather...</div>;
  if (!weather) return <div>Weather data not available</div>;

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        background: "rgba(255, 255, 255, 0.05)", // Glass effect
        backdropFilter: "blur(10px)", // Blur for glassmorphism
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
        textAlign: "center",
        width: "220px",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "5px",
          color: "#fff",
        }}
      >
        {weather.location.name}, {weather.location.country}
      </h3>

      <img
        src={weather.current.condition.icon}
        alt="Weather Icon"
        style={{
          width: "70px",
          height: "70px",
          marginBottom: "5px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      />

      <p
        style={{
          fontSize: "16px",
          fontWeight: "500",
          margin: "5px 0",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        🌡 {weather.current.temp_c}°C
      </p>
      <p
        style={{
          fontSize: "14px",
          fontWeight: "500",
          color: "#555",
          color: "#fff",
        }}
      >
        🌦 {weather.current.condition.text}
      </p>
    </div>
  );
}
