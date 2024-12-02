import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import AnimateNorthernLights from "../Components/animate-northern-lights";

const topics = [
  { title: "NATIVE AMERICANS", path: "/native-americans" },
  { title: "PATRIOTS", path: "/patriots" },
  { title: "LOYALISTS", path: "/loyalists" },
];

export const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Use useNavigate

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? topics.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === topics.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handleDivClick = () => {
    navigate(topics[currentIndex].path);
  };

  return (
    <div className="homeBackground">
      <AnimateNorthernLights />
      <div className="arrow left" onClick={() => handleArrowClick("left")}>
        &lt;
      </div>
      <div className="titlehome">What did the</div>
      <div className="titlehome3" onClick={handleDivClick}>
        {topics[currentIndex].title}
      </div>
      <div className="titlehome2">think about the American Revolution?</div>
      <div className="arrow right" onClick={() => handleArrowClick("right")}>
        &gt;
      </div>
    </div>
  );
};
