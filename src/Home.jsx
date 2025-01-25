import React from "react";
import Navbar from "./components/common/Navbar";
import MainImage from "./components/homePage/MainImage";
import Info from "./components/homePage/Info";

function Home() {
  return (
    <div>
      <Navbar />
      <hr />
      <MainImage />
      <Info
        title="About Us"
        subTitle="Our Story"
        image="https://images.hindustantimes.com/img/2023/01/10/1600x900/While-the-past-year-was-about-revenge-and-revival-_1673351689949.jpg"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus odit, reprehenderit consectetur itaque nam iusto
            blanditiis? Earum cum odit impedit, sequi voluptatum vero magnam
            voluptas, illo ipsum, aspernatur ab ratione?"
      />
      <Info
        title="Our Journey"
        subTitle="Through Times"
        image="https://ichef.bbci.co.uk/images/ic/1920xn/p0jkrxvx.jpg"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus odit, reprehenderit consectetur itaque nam iusto
            blanditiis? Earum cum odit impedit, sequi voluptatum vero magnam
            voluptas, illo ipsum, aspernatur ab ratione?"
        textFirst
        showBtn
      />
    </div>
  );
}

export default Home;
