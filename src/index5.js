import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));
// style property requires a value that is a JS object
// needs to be in between curly braces to be interpreted correctly
// const html = (
//   <div>
//     <h1 style={{ color: "red" }}>HI</h1>
//   </div>
// );

// needs to be camel case instead of kebab case for html
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

// able to change styles on the go when using in-line styling
customStyle.color = "blue";

const html = (
  <div>
    <h1 style={customStyle}>HI</h1>
  </div>
);

root.render(html);
