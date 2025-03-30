import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import leaf from "../assets/cute_leaf.png";
import WeatherCard from "./WeatherCard";
import TypingTest from "./TypingTest";
import IMG from "../assets/speed.jpg";
import typeTest from "../assets/type.jpg";
import "./tools.css"; // Import your CSS file for styling
export default function Tools() {
  const [weather, setWeather] = useState(false);
  const [location, setLocation] = useState({ lat: null, lon: null });
  const weatherRef = useRef(null); // Ref for WeatherCard container
  const [typingTest, setTypingTest] = useState(false); // State to track typing status
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        },
        (err) => {
          console.error("Geolocation denied:", err);
        }
      );
    }
  }, []);

  // Click outside to close WeatherCard
  useEffect(() => {
    function handleClickOutside(event) {
      if (weatherRef.current && !weatherRef.current.contains(event.target)) {
        setWeather(false);
      }
    }

    if (weather) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [weather]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div className="leaf">
        <button
          onClick={() => setWeather(!weather)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "block",
          }}
          className="weather-button"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={leaf} alt="Leaf" className="leaf-image" />
          </motion.div>
        </button>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#fff",
            marginTop: "5px",
          }}
        >
          Check Weather
        </p>
        {weather && location.lat && (
          <div ref={weatherRef}>
            <WeatherCard
              lat={location.lat}
              lon={location.lon}
              onClose={() => setWeather(false)}
            />
          </div>
        )}
      </div>
      <div className="speed-test">
        <a
          href="https://www.speedtest.net/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", textDecoration: "none" }}
        >
          <img
            src={IMG}
            alt="Speed Test"
            style={{
              height: "50px",
              width: "50px",
              transition: "transform 0.3s ease-in-out",
              border: "2px solid var(--color-primary)",
              borderRadius: "50%",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>
      </div>
      {/* Typing Test Button */}
      {/* Typing Test Button */}
      <div className="type-test">
        <button
          onClick={() => {
            setTypingTest(!typingTest);
            console.log("Typing Test State:", typingTest); // Debugging
          }}
          style={{
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <img
            src={typeTest}
            alt="Typing Test"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </button>
      </div>

      {/* Typing Test Component (Make sure it's placed correctly) */}
      {typingTest && (
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "300px",
          }}
        >
          {typingTest && <TypingTest onClose={() => setTypingTest(false)} />}
        </div>
      )}
    </div>
  );
}
