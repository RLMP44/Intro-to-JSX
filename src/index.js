import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));
const html = (
  <div>
    <h1>Favorite Foods</h1>
    <ul>
      <li>Sushi</li>
      <li>Katsudon</li>
      <li>Olives</li>
    </ul>
  </div>
);
// can only render a single html element
root.render(html);
