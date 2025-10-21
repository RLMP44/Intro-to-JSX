import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));
const name = "Rachael";
const currentYear = new Date().getFullYear();
const html = (
  <div>
    <p>Created by {name}</p>
    <p>Copyright {currentYear}</p>
  </div>
);

root.render(html);
