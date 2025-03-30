import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import banner0 from "../../assets/banner_0.png";
import banner1 from "../../assets/banner_1.png";
import banner2 from "../../assets/banner_2.png";
import banner3 from "../../assets/banner_3.png";
import tab1 from "../../assets/tab1.jpg";
import tab2 from "../../assets/tab2.jpg";

const Parallax = () => {
  const containerRef = useRef(null);
  const bgRefs = useRef([]);
  const tabControls = useAnimation();
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Apply Parallax Effect to banners (no framer motion here)
          bgRefs.current.forEach((bg, index) => {
            if (bg) {
              const speed = index * 0.3;
              bg.style.transform = `translateY(${-scrollY * speed}px)`;
            }
          });

          // Animate tabs using Framer Motion
          tabControls.start({
            y: scrollY * 0.2,
            transition: { type: "tween", ease: "easeOut" },
          });

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabControls]);

  return (
    <div
      ref={containerRef}
      style={{ overflow: "hidden", height: "max-content" }}
    >
      {/* Banner Section - No Framer Motion Here */}
      <div style={{ height: "50vw", position: "relative", overflow: "hidden" }}>
        <div ref={(el) => (bgRefs.current[0] = el)} style={bgStyle(banner0)} />
        <div ref={(el) => (bgRefs.current[1] = el)} style={bgStyle(banner1)} />
        <div style={{ ...textContainerStyle }}>
          <motion.h6
            style={textStyle}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hello, I'm
          </motion.h6>

          <motion.h1
            style={textStyle}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Dimple Harjani
          </motion.h1>
        </div>
        ;
        <div ref={(el) => (bgRefs.current[2] = el)} style={bgStyle(banner2)} />
        <div ref={(el) => (bgRefs.current[3] = el)} style={bgStyle(banner3)} />
      </div>

      {/* Tabs Section - Framer Motion Applied Here */}
      <motion.div animate={tabControls} className="tab" style={tabStyle(tab1)}>
        <div className="content" style={contentStyle}></div>
      </motion.div>

      <motion.div animate={tabControls} className="tab" style={tabStyle(tab2)}>
        <div
          className="content"
          style={{ ...contentStyle, width: "900px" }}
        ></div>
      </motion.div>

      <motion.div animate={tabControls} className="tab" style={tabStyle(tab1)}>
        <div className="content" style={contentStyle}></div>
      </motion.div>

      <motion.div animate={tabControls} className="tab" style={tabStyle(tab2)}>
        <div
          className="content"
          style={{ ...contentStyle, width: "900px" }}
        ></div>
      </motion.div>

      <motion.div animate={tabControls} className="tab" style={tabStyle(tab1)}>
        <div className="content" style={contentStyle}></div>
      </motion.div>
      <motion.div animate={tabControls} className="tab" style={tabStyle(tab2)}>
        <div
          className="content"
          style={{ ...contentStyle, width: "900px" }}
        ></div>
      </motion.div>
      <motion.div animate={tabControls} className="tab" style={tabStyle(tab1)}>
        <div
          className="content"
          style={{ ...contentStyle, width: "900px" }}
        ></div>
      </motion.div>
      <motion.div
        animate={tabControls}
        className="tab"
        style={{ ...tabStyle(tab1), height: "20px" }}
      >
        <div
          className="content"
          style={{ ...contentStyle, width: "900px" }}
        ></div>
      </motion.div>
      <motion.div
        animate={tabControls}
        className="tab"
        style={{ ...tabStyle(tab1), height: "20px" }}
      >
        <div
          className="content"
          style={{ ...contentStyle, width: "900px" }}
        ></div>
      </motion.div>
    </div>
  );
};

// Styles
const bgStyle = (image) => ({
  position: "absolute",
  left: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center bottom",
  backgroundImage: `linear-gradient(to top,rgba(1, 3, 2, 0), transparent),url(${image})`,
  transition: "transform 0.2s ease-out",
  willChange: "transform",
});

const tabStyle = (image) => ({
  minHeight: "100vh",

  position: "relative", // Ensure proper positioning
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden", // Prevent unwanted overflow
  backgroundImage: `linear-gradient(to top, #010302 0%, transparent 20%, #010302 80%), url(${image})`,
});

const textContainerStyle = {
  position: "absolute",
  top: "26%", // Adjusted to avoid unexpected gaps
  textAlign: "center",
  width: "100%",
};

const textStyle = {
  color: "#d1c3ae",
  fontSize: "50px",
  margin: 0,
  textShadow: "0 0px 20px #d2af76",
};

const contentStyle = {
  width: "700px",
  maxWidth: "90%",
  color: "#eee",
};

export default Parallax;
