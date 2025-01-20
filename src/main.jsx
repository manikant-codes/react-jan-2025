import React from "react";
import { createRoot } from "react-dom/client";

// const divElement = document.getElementById("root");
// const root = createRoot(divElement);
// root.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>This is a React app.</p>
//     <button>Click Me</button>
//   </div>
// );

// createRoot(document.getElementById("root")).render(<h1>Hello World!</h1>);

// createRoot(document.getElementById("root")).render(
//   React.createElement("h1", { id: "my-title" }, "Hello World!")
// );

createRoot(document.getElementById("root")).render(
  <h1>Sum of 5 & 5 is {5 + 5}</h1>
);
