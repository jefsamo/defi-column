import React from "react";
import "./Home.scss";
import Headline from "../../assets/headline.png";
import Preview from "../../components/Preview/Preview";
import Banner from "../../components/Banner/Banner";
import Shortcut from "../../components/Shortcut/Shortcut";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="left-grid">
          <img src={Headline} alt="" className="headline" />
          <div className="heading-container">
            <h1 className="heading">
              TALKING NFTS, <br /> CRYPTO AND <br /> DECENTRALIZED FINANCE{" "}
              <br />
              IN THIS BEAR RUN
            </h1>
            <p className="author">Michael Shopeyin</p>
            <p className="title">
              Understanding what makes a Bear run tick, and how to get the best
              of the run, because you can....
            </p>
          </div>
        </div>
        <div className="right-grid">
          <Preview />
          <Preview />
          <Preview />
          <Preview />
        </div>
      </div>
      <div className="banner-overview">
        <Banner />
      </div>
      <div className="shortcut-overview">
        <Shortcut />
        <Shortcut />
        <Shortcut />
        <Shortcut />
      </div>
      <hr className="rule" />
    </>
  );
};

export default Home;
