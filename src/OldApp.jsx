import React from "react";

function OldApp() {
  return (
    <div>
      <Title
        title="New Title 1"
        color="red"
        marks={45}
        obj={{ name: "Manikant" }}
      />
      <Title
        title="New Title 2"
        color="blue"
        marks={45}
        obj={{ name: "Akshay" }}
      />
      <Title
        title="New Title 3"
        color="green"
        marks={45}
        obj={{ name: "Hemant" }}
      />
    </div>
  );
}

export default OldApp;
