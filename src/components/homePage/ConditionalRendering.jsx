import React from "react";

function ConditionalRendering(props) {
  const { showCardA, padding, showBtn, showCard } = props;

  if (showCard) {
    return (
      <div
        style={{
          padding: "32px",
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {showCardA ? (
          <div
            style={{
              padding: padding === "lg" ? "32px" : "16px",
              border: "1px solid black"
            }}
          >
            <h2 style={{ marginBottom: "8px" }}>Card A</h2>
            <p style={{ marginBottom: "16px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              unde.
            </p>
            {showBtn && <button>Click Me</button>}
          </div>
        ) : (
          <div
            style={{
              padding: padding === "lg" ? "32px" : "16px",
              border: "1px solid black"
            }}
          >
            <h2 style={{ marginBottom: "8px" }}>Card B</h2>
            <p style={{ marginBottom: "16px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              unde.
            </p>
            {showBtn && <button>Click Me</button>}
          </div>
        )}
      </div>
    );
  }
  return (
    <div
      style={{
        padding: "32px",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>Card A</h1>
    </div>
  );
}

export default ConditionalRendering;
