import { useState, useEffect } from "react";

const sampleText =
  "The quick brown fox jumps over the lazy dog. Speed and accuracy are key in typing tests.";

export default function TypingTest({ onClose }) {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let timer;
    if (startTime && !finished) {
      timer = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTime, finished]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (!startTime) setStartTime(Date.now());
    setInput(value);

    if (value === sampleText) {
      setFinished(true);
    }
  };

  const resetTest = () => {
    setInput("");
    setStartTime(null);
    setTimeElapsed(0);
    setFinished(false);
  };

  const wordsTyped = input.trim().split(" ").length;
  const wpm = startTime ? Math.round((wordsTyped / timeElapsed) * 60) : 0;
  const accuracy =
    Math.round(
      (input.split("").filter((char, i) => char === sampleText[i]).length /
        sampleText.length) *
        100
    ) || 0;

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        background: "rgba(255, 255, 255, 0.1)", // Glass effect
        color: "#fff",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        position: "relative",
        border: "2px solid var(--color-primary)", // Green border
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",

          background: "red",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          fontSize: "18px",
          cursor: "pointer",
          lineHeight: "30px",
          textAlign: "center",
          transition: "0.2s",
        }}
      >
        ✕
      </button>

      <h3 style={{ color: "var(--color-primary)" }}>Typing Test</h3>
      <p style={{ fontSize: "14px", color: "#ddd" }}>{sampleText}</p>
      <textarea
        value={input}
        onChange={handleChange}
        placeholder="Start typing here..."
        style={{
          height: "100px",
          width: "450px",
          marginTop: "10px",
          padding: "10px",
          fontSize: "16px",
          color: "#fff",
          background: "rgba(255, 255, 255, 0.1)", // Transparent input
          backdropFilter: "blur(5px)",
          borderRadius: "5px",
          border: "1px solid var(--color-primary)", // Green border
          outline: "none",
          resize: "none",
        }}
        disabled={finished}
      ></textarea>
      <p>⏳ Time: {timeElapsed}s</p>
      <p>🔥 Speed: {wpm} WPM</p>
      <p>🎯 Accuracy: {accuracy}%</p>
      <button
        onClick={resetTest}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          background: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.2s",
        }}
      >
        Restart Test
      </button>
    </div>
  );
}
