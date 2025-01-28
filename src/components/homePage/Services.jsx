import React, { useState } from "react";
import styles from "./services.module.css";

const data = [
  {
    id: 1,
    title: "Service 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti?"
  },
  {
    id: 2,
    title: "Service 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti?"
  },
  {
    id: 3,
    title: "Service 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti?"
  },
  {
    id: 4,
    title: "Service 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti?"
  },
  {
    id: 5,
    title: "Service 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti?"
  },
  {
    id: 6,
    title: "Service 6",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti?"
  }
];

// const services = data.map((serviceObject, index) => {
//   return (
//     <div className={styles.card}>
//       <h3>{serviceObject.title}</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
//         deleniti?
//       </p>
//       <button>Know More</button>
//     </div>
//   );
// });

// const services = [
//   <div className={styles.card}>
//     <h3>Service 1</h3>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti?
//     </p>
//     <button>Know More</button>
//   </div>,
//   <div className={styles.card}>
//     <h3>Service 2</h3>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti?
//     </p>
//     <button>Know More</button>
//   </div>,
//   <div className={styles.card}>
//     <h3>Service 3</h3>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti?
//     </p>
//     <button>Know More</button>
//   </div>,
//   <div className={styles.card}>
//     <h3>Service 4</h3>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti?
//     </p>
//     <button>Know More</button>
//   </div>
// ];

function Services() {
  // let isList = false;
  // const stateArray = useState(false);
  // const isList = stateArray[0];
  // const setIsList = stateArray[1];
  // OR
  const [isList, setIsList] = useState(false);

  function handleClick() {
    if (isList === true) {
      // isList = false;
      setIsList(false);
    } else {
      // isList = true;
      setIsList(true);
    }
    console.log(isList);
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Services</h2>
        <button onClick={handleClick}>Change View</button>
      </div>

      {/* cards */}
      <div
        className={isList ? styles.cardsListContainer : styles.cardsContainer}
      >
        {data.map((serviceObject, index) => {
          return (
            <div className={styles.serviceCard}>
              <h3>{serviceObject.title}</h3>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                deleniti?
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
