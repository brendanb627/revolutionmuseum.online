import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import React, { useEffect } from "react";

// Array of colors to be animated
const COLORS_TOP = ['rgba(232, 48, 60, 0.5)', // Red with 50% transparency
  'rgba(90, 173, 211, 0.5)'];

function AnimateNorthernLights() {
  // Initialize motion value with the first color
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    // Animate the color changes in a loop
    animate(color, COLORS_TOP, {
      ease: "easeInOut",  // Easing function for smooth transitions
      duration: 10,       // Duration for the entire color transition cycle
      repeat: Infinity,   // Repeat the animation infinitely
      repeatType: "mirror", // Reverses the animation direction on each cycle
    });
  }, [color]);

  // Use motion template to create a dynamic background gradient
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, rgba(90, 173, 211, 0.0) 40%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="homepage"
    >
      {/* Additional content can be added here */}
    </motion.section>
  );
}

export default AnimateNorthernLights;