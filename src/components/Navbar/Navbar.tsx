import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import D from "../../assets/D.png";
import Column from "../../assets/column.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="inner-navbar">
          <div className="hamburger">
            <RxHamburgerMenu size={30} className="ham-menu" />
            <div className="nav-links">
              <li>
                <Link to="/">Defi</Link>
              </li>
              <li>
                <Link to="/">NFTs</Link>
              </li>
              <li>
                <Link to="/">Bullrun</Link>
              </li>
              <li>
                <Link to="/">Writers</Link>
              </li>
            </div>
          </div>
          <div className="logo">
            <img src={D} alt="d-logo" />
            <img src={Column} alt="column-logo" className="column" />
          </div>
          <div className="subscribe-link">
            <li>
              <Link to="/">Subscribe</Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
