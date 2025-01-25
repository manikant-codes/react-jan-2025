import React from "react";
import "./info.css";

function Info(props) {
  return (
    <div className="container">
      <h2>{props.title}</h2>
      <div className="contentContainer">
        <div
          className="imageContainer"
          style={{ order: props.textFirst ? 2 : 1 }}
        >
          <img src={props.image} alt="" />
        </div>
        <div
          className="textContainer"
          style={{ order: props.textFirst ? 1 : 2 }}
        >
          <h3>{props.subTitle}</h3>
          <p>{props.desc}</p>
          {/* {props.showBtn ? <button>Know More</button> : null} */}
          {props.showBtn && <button>Know More</button>}
        </div>
      </div>
    </div>
  );
}

export default Info;
