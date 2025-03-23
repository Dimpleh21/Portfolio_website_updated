import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/dimple-harjani-652a6925a/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href=" https://github.com/Dimpleh21" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1226568408242300561"
        target="_blank"
      >
        <FiFigma />
      </a>
    </div>
  );
};

export default HeaderSocials;
/*import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import banner0 from "../../assets/banner_0.png";
import banner1 from "../../assets/banner_1.png";
import banner2 from "../../assets/banner_2.png";
import banner3 from "../../assets/banner_3.png";
import tab1 from "../../assets/tab1.jpg";
import tab2 from "../../assets/tab2.jpg";*/
