import React from "react";
import "./Shortcut.scss";
import ShortcutImg from "../../assets/shortcut.png";
import { Link } from "react-router-dom";

const Shortcut = () => {
  return (
    <Link to="">
      <div className="shortcut">
        <img src={ShortcutImg} alt="" className="shortcut-img" />
        <h3>ALIENS! HERE FOR US</h3>
        <p className="desc">
          Rugs are ary within the WEB3 ecosystem, and we decided to work on
          that, we’ve created a list of things to look out for next time you see
          one.
        </p>
        <p className="author">Michael Shopeyin</p>
      </div>
    </Link>
  );
};

export default Shortcut;
