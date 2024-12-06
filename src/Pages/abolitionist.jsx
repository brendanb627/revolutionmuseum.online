import React from "react";
import { VirtualMuseum } from "../Components/virtual-museum";

export const Abolitionists = () => {
  const images = [
    {
      position: [-1.5, 0, 1.9],
      rotation: [0, Math.PI / 5.5, 0],
      size: [1.2, 1.31],
      url: "abolitionist-music.jpg",
      viewname: `"The Anti-Slavery Harp"\nby William Wells Brown`,
    },
    // Right
    {
      position: [1.5, 0, 1.9],
      rotation: [0, -Math.PI / 5.5, 0],
      size: [1.2, 1.31],
      url: "abolitionist-plea.jpg",
      viewname: `"Mission to the Fugitive Slaves in Canada"`,
    },
    {
      position: [2.35, 0, 2.4],
      rotation: [0, -Math.PI / 5.5, 0],
      size: [0.7, 0.8],
      url: "abo-canada.png",
      viewname: ``,
    },
    {
      position: [-2.35, 0, 2.4],
      rotation: [0, Math.PI / 5.5, 0],
      size: [0.7, 0.8],
      url: "abo-harp.png",
      viewname: ``,
    },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          <span className="blueGradient">Abolitionist's</span>POV
        </h1>
      </div>
      <div className="virtual-museum">
        <VirtualMuseum images={images} />
      </div>
      <div className="sectcover">
        <div className="sect">
          <h2 className="gradient-text">Image Sources</h2>
          <p>
            “The Anti-Slavery Harp: A Collection of Songs for Anti-Slavery
            Meetings: Brown, William Wells, 1815-1884 Comp: Free Download,
            Borrow, and Streaming.” Internet Archive, Boston, B. Marsh, 1 Jan.
            1970,
            <a href="https://archive.org/details/antislaveryharpc00brow/page/n3/mode/2up">
              archive.org/details/antislaveryharpc00brow/page/n3/mode/2up
            </a>
            <br />
            <br />
            “Mission to the Fugitive Slaves in Canada: Being a Branch of the
            Operations of the Colonial Church and School Society.” Internet
            Archive,
            <a href="https://archive.org/details/1864Missiontofugitiveslavesincanada1864Images/page/8/mode/2up">
              archive.org/details/1864Missiontofugitiveslavesincanada1864Images/page/8/mode/2up
            </a>
            . Accessed 3 Dec. 2024.
          </p>
        </div>
        <div className="sect">
          <h2 className="gradient-text">Text Sources</h2>
          <p>
            <br />
            <br />
            “The ANTI-SLAVERY Harp: Collection of Songs for Anti-Slavery
            Meetings.” The Project Gutenberg eBook of The Anti-Slavery Harp:
            Collection of Songs For Anti-Slavery Meetings, by William W. Brown.
            <a
              href="https://www.gutenberg.org/files/58414/58414-h/58414-h.htm"
              target="_blank"
            >
              www.gutenberg.org/files/58414/58414-h/58414-h.htm
            </a>
            . Accessed 4 Dec. 2024.
            <br />
            <br />
            “1.2: The Slavery Controversy and Abolitionist Literature.”
            Humanities LibreTexts, Libretexts, 1 Feb. 2022.
            <a
              href="https://human.libretexts.org/Courses/Sacramento_City_College/ENGLT_331%3A_African-American_Literature_(1730-1930)_(White)/01%3A_Chapter_1/1.02%3A_The_Slavery_Controversy_and_Abolitionist_Literature"
              target="_blank"
            >
              human.libretexts.org/Courses/Sacramento_City_College/ENGLT_331%3A_African-American_Literature_(1730-1930)_(White)/01%3A_Chapter_1/1.02%3A_The_Slavery_Controversy_and_Abolitionist_Literature
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
