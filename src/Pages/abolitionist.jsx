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
            Meetings : Brown, William Wells, 1815-1884 Comp : Free Download,
            Borrow, and Streaming.” Internet Archive, Boston, B. Marsh, 1 Jan.
            1970,{" "}
            <a href="https://archive.org/details/antislaveryharpc00brow/page/n3/mode/2up">
              archive.org/details/antislaveryharpc00brow/page/n3/mode/2up
            </a><br/><br/>
            “Mission to the Fugitive Slaves in Canada: Being a Branch of the
            Operations of the Colonial Church and School Society.” Internet
            Archive,
            <a href="https://archive.org/details/1864Missiontofugitiveslavesincanada1864Images/page/8/mode/2up">archive.org/details/1864Missiontofugitiveslavesincanada1864Images/page/8/mode/2up</a>.
            Accessed 3 Dec. 2024.
          </p>
        </div>
      </div>
    </div>
  );
};
