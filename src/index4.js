import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));
const name = "Rachael";
const favFoods = ["Sushi", "Katsudon", "Kinpiragobo"];
const img = "https://picsum.photos/200";
/* when writing attributes, use camelcase JSX versions of lowercase HTML */
const html = (
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      {name}'s Favorite Foods
    </h1>
    <div className="photo-container">
      <img
        className="food-image"
        alt="sashimi"
        src="https://www.shutterstock.com/image-photo/buri-yellotail-sashimi-on-lotus-260nw-1090749530.jpg"
      ></img>
      <img
        className="food-image"
        alt="katsudon"
        src="https://sudachirecipes.com/wp-content/uploads/2020/04/katsudon-sqr.jpg"
      ></img>
      <img
        className="food-image"
        alt="kinpiragobo"
        src="https://chefjacooks.com/wp-content/uploads/2022/11/kinpira-square.jpg"
      ></img>
    </div>
    <ul>
      {favFoods.map((food) => (
        <li>{food}</li>
      ))}
    </ul>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      {name}'s Favorite Things
      <img src={img + "?grayscale"}></img>
    </h1>
  </div>
);
root.render(html);
