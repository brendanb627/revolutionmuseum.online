import React from "react";
import { VirtualMuseum } from "../Components/virtual-museum";

export const NativeAmericans = () => {
  const images = [
    {
      position: [-1.5, 0, 1.9],
      rotation: [0, Math.PI / 5.5, 0],
      size: [1.2, 1.31],
      url: "joseph-brant.jpg",
      viewname: `"Joseph Brant"\nby Gilbert Stuart`,
    },
    // Right
    {
      position: [1.5, 0, 1.9],
      rotation: [0, -Math.PI / 5.5, 0],
      size: [1.2, 1.31],
      url: "ShenendoahSculpture.jpg",
      viewname: `"Allies in War, Partners in Peace"\nDesigned by Edward Hlavka`,
    },
    {
      position: [2.35, 0, 2.4],
      rotation: [0, -Math.PI / 5.5, 0],
      size: [0.7, 0.8],
      url: "native-John.png",
      viewname: ``,
    },
    {
      position: [-2.35, 0, 2.4],
      rotation: [0, Math.PI / 5.5, 0],
      size: [0.7, 0.8],
      url: "native-Brant.png",
      viewname: ``,
    },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          <span className="blueGradient">Native American's</span>POV
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
            Stuart, Gilbert. “Portrait of Joseph Brant by Gilbert Stuart.” Fine
            Art America.
            <a
              href="https://fineartamerica.com/featured/portrait-of-joseph-brant-gilbert-stuart.html"
              target="_blank"
            >
              fineartamerica.com/featured/portrait-of-joseph-brant-gilbert-stuart.html
            </a>
            . Accessed 3 Dec. 2024.
            <br />
            <br />
            “A 1912 Tribute to Chief Shenendoah - Oneida Indian Nation.” Oneida
            Indian Nation, 29 Jan. 2024.
            <a
              href="https://www.oneidaindiannation.com/a-1912-tribute-to-chief-shenendoah/"
              target="_blank"
            >
              www.oneidaindiannation.com/a-1912-tribute-to-chief-shenendoah/
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
            “Skenandoah (U.S. National Park Service).” National Parks Service,
            U.S. Department of the Interior.
            <a href="https://www.nps.gov/people/skenandoah.htm" target="_blank">
              www.nps.gov/people/skenandoah.htm
            </a>
            . Accessed 6 Dec. 2024.
            <br />
            <br />
            “Revolutionary Limits: Native Americans.” Ushistory.Org,
            Independence Hall Association.
            <a href="https://www.ushistory.org/us/13f.asp" target="_blank">
              www.ushistory.org/us/13f.asp
            </a>
            . Accessed 6 Dec. 2024.
            <br />
            <br />
            “A 1912 Tribute to Chief Shenendoah - Oneida Indian Nation.” Oneida
            Indian Nation, 29 Jan. 2024.
            <a
              href="https://www.oneidaindiannation.com/a-1912-tribute-to-chief-shenendoah/"
              target="_blank"
            >
              www.oneidaindiannation.com/a-1912-tribute-to-chief-shenendoah/
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
