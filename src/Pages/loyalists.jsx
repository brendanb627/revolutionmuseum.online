import React from "react";
import { VirtualMuseum } from "../Components/virtual-museum";

export const Loyalists = () => {
  const images = [
    // Front
    {
      position: [-0.15, 0, 2.5],
      size: [1.3, 1.31],
      rotation: [0, 0, 0],
      url: "TheBritishLion.jpg",
      viewname: `"The British Lion"\nBy Barrow, J.`,
    },
    // Left
    {
      position: [-2, 0, 2.75],
      rotation: [0, Math.PI / 4.5, 0],
      size: [1.61, 1.41],
      url: "LoyalistViewColonists.jpg",
      viewname: `"Tarring and Feathering"\nBy Philip Dawes`,
    },
    {
      position: [2, 0, 2.75],
      rotation: [0, -Math.PI / 4.5, 0],
      size: [1.4, 1.2],
      url: "NativesAttackingLoyalists.jpg",
      viewname: `"Shelb-ns Sacrifice"\nBy Robert Sayer`,
    },
    {
      position: [2.0434 * 1.4, 0, 2.8519 * 1.2],
      rotation: [0, -Math.PI / 4.5, 0],
      size: [0.7, 0.8],
      url: "loyalist-Shelb.png",
      isPrint: true,
      viewname: ``,
    },
    {
      position: [-2.0434 * 1.45, 0, 2.8519 * 1.225],
      rotation: [0, Math.PI / 4.5, 0],
      size: [0.7, 0.8],
      url: "loyalist-feathering.png",
      isPrint: true,
      viewname: ``,
    },
    {
      position: [0.9, 0, 2.5],
      rotation: [0, 0, 0],
      size: [0.7, 0.8],
      url: "loyalist-BritishLion.png",
      isPrint: true,
      viewname: ``,
    },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          <span className="blueGradient">Loyalists</span> view on the American
          Revolution
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
            Robert Sayer And John Bennett, Publisher. The Bostonians in
            Distress. London: Printed for R. Sayer and J. Bennett, Map &
            Printsellers, No. 53 Fleet Street, as the Act directs, Novr. 19.
            Photograph. Retrieved from the Library of Congress,{" "}
            <a href="https://www.loc.gov/item/2004673305" target="_blank">
              www.loc.gov/item/2004673305
            </a>
            .
            <br />
            <br />
            “Massachusetts Historical Society. Founded 1791.” MHS Collections
            Online: The Bostonians Paying the Excise-Man or Tarring &
            Feathering; Copied on Stone by D. C. Johnston from a Print Published
            in London in 1774.{" "}
            <a
              href="https://www.masshist.org/database/viewer.php?item_id=6626&pid=3"
              target="_blank"
            >
              www.masshist.org/database/viewer.php?item_id=6626&pid=3
            </a>
            . Accessed 3 Dec. 2024.
            <br />
            <br />
            The British Lion Engaging Four Powers. [London: Pubd. by J. Barrow:
            Sold by Richardson Print Seller, N. 68 High Holborn, th] Photograph.
            Retrieved from the Library of Congress,{" "}
            <a href="https://www.loc.gov/item/2004673480" target="_blank">
              www.loc.gov/item/2004673480
            </a>
            .
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};
