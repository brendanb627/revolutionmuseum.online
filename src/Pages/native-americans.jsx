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
      url: "ExampleText.png",
      viewname: ``,
    },
    {
      position: [-2.35, 0, 2.4],
      rotation: [0, Math.PI / 5.5, 0],
      size: [0.7, 0.8],
      url: "ExampleText.png",
      viewname: ``,
    },
  ];

  return (
    <div className="App">
      <div className="App-header">
      <h1><span className="blueGradient">Native Americans</span> view on the Revolution</h1>
      </div>
      <div className="sect">
        <h2 className="gradient-text">Overview</h2>
        <p>
          This is a virtual museum. It is a 3D space where you can view images
          from
        </p>
      </div>
      <div className="virtual-museum">
        <VirtualMuseum images={images} />
      </div>
      <div className="sectcover">
        <div className="sect">
        <h2 className="gradient-text">Image Sources</h2>
        <p>
            The images used in this virtual museum are from the following sources:
            www.example.com
        </p>
        </div>
        </div>
    </div>
  );
};
