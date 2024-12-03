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
      url: "ExampleText.png",
      isPrint: true,
      viewname: ``,
    },
    {
      position: [-2.0434 * 1.45, 0, 2.8519 * 1.225],
      rotation: [0, Math.PI / 4.5, 0],
      size: [0.7, 0.8],
      url: "ExampleText.png",
      isPrint: true,
      viewname: ``,
    },
    {
      position: [0.9, 0, 2.5],
      rotation: [0, 0, 0],
      size: [0.7, 0.8],
      url: "ExampleText.png",
      isPrint: true,
      viewname: ``,
    },
  ];

  return (
    <div className="App">
      <div className="App-header">
      <h1><span className="blueGradient">Loyalists</span> view on the American Revolution</h1>
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
        <h2 className="gradient-text">Sources</h2>
        <p>
            The images used in this virtual museum are from the following sources:
            www.example.com
        </p>
        </div>
        </div>
    </div>
  );
};
