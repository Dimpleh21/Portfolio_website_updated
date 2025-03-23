import { useState, useRef } from "react";
import { motion } from "framer-motion";

const MusicTextEffect = (isPlaying) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Music Player */}

      {/* Text Animation */}
      <motion.h1
        style={{ fontSize: "2rem", color: "#fff" }}
        initial={{ scale: 1, opacity: 1 }}
        animate={
          isPlaying
            ? { scale: [1, 1.3, 1], opacity: [1, 1, 1] }
            : { scale: 1, opacity: 1 }
        }
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: isPlaying ? Infinity : 0, // Loop when music is playing
          repeatType: "reverse",
        }}
      >
        Hello, I'm Dimple Harjani
      </motion.h1>
    </div>
  );
};

export default MusicTextEffect;
