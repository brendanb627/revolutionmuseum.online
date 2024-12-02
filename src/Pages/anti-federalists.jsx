import React from "react";
import { VirtualMuseum } from "../Components/virtual-museum";

export const AntiFederalists = () => {
  const images = [
    // Front
    {
      position: [0, 0, 1.5],
      size: [1, 1.61],
      rotation: [0, 0, 0],
      url: "https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg",
      viewname: "picture1",
    },
    // Back
    {
      position: [-0.8, 0, -0.6],
      rotation: [0, 0, 0],
      size: [1, 1.61],
      url: "https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg",
      viewname: "picture2",
    },
    {
      position: [0.8, 0, -0.6],
      rotation: [0, 0, 0],
      size: [1, 1.61],
      url: "https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg",
      viewname: "picture3",
    },
    // Left
    {
      position: [-1.75, 0, 0.25],
      rotation: [0, Math.PI / 2.5, 0],
      size: [1.5, 1.5],
      url: "logo512.png",
      viewname: 'React logo',
    },
    {
      position: [-2.15, 0, 1.5],
      rotation: [0, Math.PI / 2.5, 0],
      size: [1, 1.61],
      url: "https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg",
      viewname: "picture4",
    },
    {
      position: [-2, 0, 2.75],
      rotation: [0, Math.PI / 2.5, 0],
      size: [1, 1.61],
      url: "https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg",
      viewname: "picture5",
    },
    // Right
    {
      position: [1.75, 0, 0.25],
      rotation: [0, -Math.PI / 2.5, 0],
      size: [1, 1.61],
      url: "https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg",
      viewname: "picture6",
    },
    {
      position: [2.15, 0, 1.5],
      rotation: [0, -Math.PI / 2.5, 0],
      size: [1, 1.61],
      url: "https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg",
      viewname: "picture7",
    },
    {
      position: [2, 0, 2.75],
      rotation: [0, -Math.PI / 2.5, 0],
      size: [1, 1.61],
      url: "https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg",
      viewname: `picture8\nThis is a picture`,
    },
  ];

  return (
    <div className="App">
      <div className="App-header">
      <h1><span className="redGradient">Anti-Federalists</span></h1>
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
