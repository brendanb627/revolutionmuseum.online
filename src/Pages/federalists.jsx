import React from "react";
import { VirtualMuseum } from "../Components/virtual-museum";

export const Federalists = () => {
  const images = [
    {
      position: [-1.5, 0, 1.9],
      rotation: [0, Math.PI / 5.5, 0],
      size: [1.2, 1.31],
      url: "federalist-pillars.jpg",
      viewname: `"Federal Pillars"\nby Benjamin Russell`,
    },
    // Right
    {
      position: [1.5, 0, 1.9],
      rotation: [0, -Math.PI / 5.5, 0],
      size: [1.2, 1.31],
      url: "antifederal-club.jpg",
      viewname: `"A Peep into the Antifederal Club"\nby Unknown`,
    },
    {
      position: [2.35, 0, 2.4],
      rotation: [0, -Math.PI / 5.5, 0],
      size: [0.7, 0.8],
      url: "fed-club.png",
      viewname: ``,
    },
    {
      position: [-2.35, 0, 2.4],
      rotation: [0, Math.PI / 5.5, 0],
      size: [0.7, 0.8],
      url: "fed-pillar.png",
      viewname: ``,
    },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          <span className="blueGradient">Federalist's</span>POV
        </h1>
      </div>
      <div className="virtual-museum">
        <VirtualMuseum images={images} />
      </div>
      <div className="sectcover">
        <div className="sect">
          <h2 className="gradient-text">Image Sources</h2>
          <p>
          The images used in this virtual museum are from the following
            sources:
            <br />
            <br />
            “A Peep into the Antifederal Club. [Graphic].” Library Company of
            Philadelphia Digital Collections,
            <a href="https://digital.librarycompany.org/islandora/object/Islandora%3A65130">digital.librarycompany.org/islandora/object/Islandora%3A65130.</a>
            Accessed 3 Dec. 2024.
            <br />
            <br />
            “The Federal Pillars.” Library of Congress, 1 Jan. 1788,
            <a href="https://www.loc.gov/pictures/resource/cph.3a45782/">www.loc.gov/pictures/resource/cph.3a45782/.</a>
          </p>
        </div>
      </div>
    </div>
  );
};
