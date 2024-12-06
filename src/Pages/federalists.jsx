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
            <a href="https://digital.librarycompany.org/islandora/object/Islandora%3A65130">
              digital.librarycompany.org/islandora/object/Islandora%3A65130.
            </a>
            Accessed 3 Dec. 2024.
            <br />
            <br />
            “The Federal Pillars.” Library of Congress, 1 Jan. 1788,
            <a href="https://www.loc.gov/pictures/resource/cph.3a45782/">
              www.loc.gov/pictures/resource/cph.3a45782/.
            </a>
          </p>
        </div>
        <div className="sect">
          <h2 className="gradient-text">Text Sources</h2>
          <p>
            The text used in this virtual museum are from the following sources:
            <br />
            <br />
            Germain, Edward. “American Revolution Political Cartoons: 9
            Examples.” AmericanRevolution.Org.
            <a
              href="https://www.americanrevolution.org/american-revolution-political-cartoons/"
              target="_blank"
            >
              www.americanrevolution.org/american-revolution-political-cartoons/
            </a>
            . Accessed 3 Dec. 2024.
            <br />
            <br />
            “Massachusetts Historical Society. Founded 1791.” MHS Collections
            Online: The Bostonians Paying the Excise-Man or Tarring &
            Feathering; Copied on Stone by D. C. Johnston from a Print Published
            in London in 1774.
            <a
              href="https://www.masshist.org/database/viewer.php?item_id=6626&pid=3"
              target="_blank"
            >
              www.masshist.org/database/viewer.php?item_id=6626&pid=3
            </a>
            . Accessed 3 Dec. 2024.
            <br />
            <br />
            Britannica, The Editors of Encyclopaedia. "Loyalist." Encyclopedia
            Britannica, 25 Nov. 2024.
            <a href="https://www.britannica.com/topic/loyalist" target="_blank">
              www.britannica.com/topic/loyalist
            </a>
            . Accessed 3 Dec. 2024.
            <br />
            <br />
            Germain, Edward. “American Revolution Propaganda: Examples &
            Themes.” AmericanRevolution.Org.
            <a
              href="https://www.americanrevolution.org/propaganda/"
              target="_blank"
            >
              www.americanrevolution.org/propaganda/
            </a>
            . Accessed 3 Dec. 2024.
            <br />
            <br />
            “The British Lion Engaging Four Powers: Royal Museums Greenwich.”
            The British Lion Engaging Four Powers | Royal Museums Greenwich.
            <a
              href="https://www.rmg.co.uk/collections/objects/rmgc-object-128053"
              target="_blank"
            >
              www.rmg.co.uk/collections/objects/rmgc-object-128053
            </a>
            . Accessed 3 Dec. 2024.
            <br />
            <br />
            “A Peep into the Anti-Federal Club.” William L. Clements Library
            Image Bank.
            <a
              href="https://quod.lib.umich.edu/w/wcl1ic/x-9121/wcl009196"
              target="_blank"
            >
              quod.lib.umich.edu/w/wcl1ic/x-9121/wcl009196
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
