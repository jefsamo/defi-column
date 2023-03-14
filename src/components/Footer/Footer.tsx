import { Link } from "react-router-dom";
import "./Footer.scss";
import Twitter from "../../assets/twitterng.png";
import Facebook from "../../assets/facebook.png";
import LinkedIn from "../../assets/linkedIn.png";
import Insta from "../../assets/insta.png";
import Wifi from "../../assets/wifi.png";
import Yt from "../../assets/yt.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="grid-item">
          <h2>About</h2>
          <Link to="">Careers</Link>
          <Link to="">Our History</Link>
        </div>
        <div className="grid-item">
          <h2>Contact</h2>
          <Link to="">Help Center</Link>
          <Link to="">Contact Us</Link>
          <Link to="">Press</Link>
        </div>
        <div className="grid-item">
          <h2>Guides</h2>
          <Link to="/beginner-guide">Beginner's Guide</Link>
          <Link to="">Web3 Defi Projects</Link>
          <Link to="">Defi Trends</Link>
        </div>
        <div className="grid-item">
          <h2>Follow</h2>
          <div className="first-row">
            <Link to="">
              <img src={Facebook} alt="" />
            </Link>
            <Link to="">
              <img src={Twitter} alt="" />
            </Link>
            <Link to="">
              <img src={Insta} alt="" />
            </Link>
          </div>
          <div className="second-row">
            <Link to="">
              <img src={LinkedIn} alt="" />
            </Link>
            <Link to="">
              <img src={Wifi} alt="" />
            </Link>
            <Link to="">
              <img src={Yt} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
