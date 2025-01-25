import React from "react";

function MainImage() {
  return (
    <div>
      <img
        style={{
          height: "400px",
          width: "100%",
          objectFit: "cover",
          objectPosition: "bottom"
        }}
        src="https://images.goway.com/production/hero/iStock-1919241099.jpeg"
        alt=""
      />
    </div>
  );
}

export default MainImage;
