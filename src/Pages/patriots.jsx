import React from "react";
import { VirtualMuseum } from "../Components/virtual-museum";

export const Patriots = () => {
  const images = [
    // Front
    {
      position: [0, 0, 2.5],
      size: [1, 1.31],
      rotation: [0, 0, 0],
      url: "PaulRevereBostonMassacre.png",
      viewname: `"Boston Massacre"\nBy Paul Revere`,
    },
    // Left
    {
      position: [-2, 0, 2.75],
      rotation: [0, Math.PI / 4.5, 0],
      size: [1.61, 1.41],
      url: "JoinOrDie.png",
      viewname: `"Join or Die"\nBy Ben Franklin`,
    },
    {
      position: [2, 0, 2.75],
      rotation: [0, -Math.PI / 4.5, 0],
      size: [1.4, 1.5],
      url: "BostoniansInDistress.png",
      viewname: `"Bostonians in Distress"\nBy Robert Sayer`,
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
      <h1><span className="redGradient">Patriots</span></h1>
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
            The images used in this virtual museum are from the following sources:<br/><br/>
            Robert Sayer And John Bennett , Publisher. <i>The Bostonians in Distress</i>. London: Printed for R. Sayer and J. Bennett, Map & Printsellers, No. 53 Fleet Street, 
            as the Act directs, Novr. 19. Photograph. Retrieved from the Library of Congress, <a href='https://www.loc.gov/item/2004673305' target="_blank">www.loc.gov/item/2004673305</a>.
        </p>
        </div>
        </div>
    </div>
  );
};
