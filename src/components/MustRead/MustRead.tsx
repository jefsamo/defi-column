import React from "react";
import { Link } from "react-router-dom";
import MustreadImg from "../../assets/mustread.png";
import "./MustRead.scss";

const MustRead = () => {
  return (
    <div className="must-read">
      <h1>A must read</h1>
      <Link to="">
        <div className="must-read-container">
          <div className="left-content">
            <p className="date">Mar 4</p>
            <div className="details">
              <h4>
                Why it is important to invest in NFTs and why you must do it now
              </h4>
              <p>
                There are several reasons you must dive into the NFT space.
                Check out several reasons you should do so and don miss out.
              </p>
            </div>
            <p className="author">Olawale Shopeyin</p>
          </div>
          <div className="right-content">
            <img src={MustreadImg} alt="mustread" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MustRead;
