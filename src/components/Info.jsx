import React, { memo } from "react";

function Info(props) {
  console.log("Info Rendered");
  return (
    <div
      style={{ backgroundColor: "#212121", color: "white", padding: "32px" }}
    >
      <h2 style={{ marginBottom: "8px" }}>Lorem, ipsum dolor.</h2>
      <ul>
        {props.list.map((listItem, index) => {
          return <li key={index}>{listItem}</li>;
        })}
      </ul>
      <button style={{ marginTop: "32px" }} onClick={props.addNew}>
        Add New
      </button>
    </div>
  );
}

export default memo(Info);
