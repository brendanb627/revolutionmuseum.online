import React from "react";

// Static color for the gradient
const STATIC_COLOR = "#13FFAA"; // Example static color

export function NorthernLights() {
  const backgroundImage = `radial-gradient(125% 125% at 50% 0%, #020617 50%, ${STATIC_COLOR})`;

  return (
    <section
      style={{ backgroundImage }}
      className="homepage"
    >
      {/* Content can go here */}
    </section>
  );
}