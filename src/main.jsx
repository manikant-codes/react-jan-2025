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

const name = "Manikant";

createRoot(document.getElementById("root")).render(
  <>
    <h1 className="my-class">Hello World!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, debitis.
    </p>
    <img
      src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
      alt="chameleon"
    />
    <h1>New Title! {name}</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
      molestias?
    </p>
  </>
);
