import React from "react";

function Title(props) {
  console.log("props", props);

  return (
    <>
      <h1>{props.title}</h1>
      <p>Color: {props.color}</p>
      <p>Marks: {props.marks}</p>
      <p>Name: {props.obj?.name}</p>
    </>
  );
}

export default Title;
