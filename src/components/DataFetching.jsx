import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function DataFetching() {
  const [users, setUsers] = useState(null);

  async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  console.log("users", users);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    appendDots: (dots) => (
      <div
        style={{
          position: "relative",
          backgroundColor: "#ddd",
          borderRadius: "50%",
          height: "10px",
          width: "10px",
          top: "-50px",
          left: "50%"
        }}
      />
    )
    // slidesToShow: 1,
    // slidesToScroll: 1
  };

  return (
    <>
      <div>
        <Slider {...settings} className="full-w">
          <div>
            <img
              src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
              alt=""
              width="100%"
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
              alt=""
              width="100%"
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
        </Slider>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "32px"
        }}
      >
        <div>
          <h2 style={{ marginBottom: "32px" }}>Data Fetching</h2>

          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "16px"
            }}
          >
            {users?.map((userObject) => {
              return (
                <li>
                  <p>{userObject.id}</p>
                  <p>{userObject.name}</p>
                  <p>{userObject.phone}</p>
                  <p>{userObject.website}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DataFetching;
