import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./GoToTop.css";

const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button className="go-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
};

export default GoToTop;
