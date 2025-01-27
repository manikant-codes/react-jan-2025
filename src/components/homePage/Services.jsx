import React from "react";
// import "./services.css";
import styles from "./services.module.css";

const data = [
  {
    id: 1,
    title: "Service 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex!"
  },
  {
    id: 2,
    title: "Service 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex!"
  },
  {
    id: 3,
    title: "Service 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex!"
  },
  {
    id: 4,
    title: "Service 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex!"
  }
];

const cards = data.map((cardObject, index) => {
  return (
    <div className={styles.card}>
      <h3>{cardObject.title}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex!</p>
      <button>Know More</button>
    </div>
  );
});

// const cards = [
//   <div className={styles.card}>
//     <h3>Service 1</h3>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex!</p>
//     <button>Know More</button>
//   </div>,
//   <div className={styles.card}>
//     <h3>Service 2</h3>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex!</p>
//     <button>Know More</button>
//   </div>,
//   <div className={styles.card}>
//     <h3>Service 3</h3>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex!</p>
//     <button>Know More</button>
//   </div>,
//   <div className={styles.card}>
//     <h3>Service 4</h3>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex!</p>
//     <button>Know More</button>
//   </div>
// ];

function Services() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Services</h2>

      <div className={styles.cardContainer}>
        {/* Service Card */}
        {cards}
      </div>
    </div>
  );
}

export default Services;
