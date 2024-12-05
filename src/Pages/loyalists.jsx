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
          <span className="blueGradient">Loyalists</span>POV
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
        <div className="sect">
          <h2 className="gradient-text">Text Sources</h2>
          <p>
            The text used in this virtual museum are from the following sources:
            <br />
            <br />
            “The British Lion Engaging Four Powers: Royal Museums Greenwich.”
            Royal Museums Greenwich.{" "}
            <a
              href="https://www.rmg.co.uk/collections/objects/rmgc-object-128053"
              target="_blank"
            >
              www.rmg.co.uk/collections/objects/rmgc-object-128053
            </a>
            . Accessed 4 Dec. 2024.
            <br />
            <br />
            The British lion engaging four powers. Library of Congress.{" "}
            <a href="https://www.loc.gov/item/2004673480" target="_blank">
              www.loc.gov/item/2004673480
            </a>
            . Accessed 4 Dec. 2024.
            <br />
            <br />
            “Massachusetts Historical Society. Founded 1791.” MHS Collections
            Online: The Bostonians Paying the Excise-Man or Tarring &
            Feathering.{" "}
            <a
              href="https://www.masshist.org/database/viewer.php?item_id=6626&pid=3"
              target="_blank"
            >
              www.masshist.org/database/viewer.php?item_id=6626&pid=3
            </a>
            . Accessed 4 Dec. 2024.
            <br />
            <br />
            Germain, Edward. “American Revolution Propaganda: Examples &
            Themes.” AmericanRevolution.Org.{" "}
            <a
              href="https://www.americanrevolution.org/propaganda/"
              target="_blank"
            >
              www.americanrevolution.org/propaganda/
            </a>
            . Accessed 4 Dec. 2024.
            <br />
            <br />
            Shelburne's Sacrifice [graphic]. Library of Congress.{" "}
            <a
              href="https://www.loc.gov/pictures/item/2004673514/"
              target="_blank"
            >
              www.loc.gov/pictures/item/2004673514/
            </a>
            . Accessed 4 Dec. 2024.
            <br />
            <br />
            Shelburne's Sacrifice: Caricature on the Treaty of Paris. Granger
            Historical Picture Archive.{" "}
            <a
              href="https://www.granger.com/results.asp?image=0126753"
              target="_blank"
            >
              www.granger.com/results.asp?image=0126753
            </a>
            . Accessed 4 Dec. 2024.
            <br />
            <br />
            Shelburne's Sacrifice [graphic]. Yale University Library Digital
            Collections.{" "}
            <a
              href="https://collections.library.yale.edu/catalog/10724705"
              target="_blank"
            >
              collections.library.yale.edu/catalog/10724705
            </a>
            . Accessed 4 Dec. 2024.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};
