import "./Protocol.scss";
import Astronaut from "../../assets/astronaut.png";
import Astronaut2 from "../../assets/astronaut2.png";
import { Link } from "react-router-dom";

const Protocol = () => {
  return (
    <>
      <h1 className="title">Web3 Defi Projects</h1>
      <div className="protocol">
        <div className="left-protocol">
          <Link to="">
            <div className="protocol-container">
              <img src={Astronaut} alt="astronaut" />
              <div className="details">
                <h3>SEASONAL PROJECTS IN THE NFT SPACE</h3>
                <p className="desc">
                  Rugs are ary within the WEB3 ecosystem, and we decided to work
                  on that, we’ve created a list of things to look out for next
                  time you see one.
                </p>
                <p className="author">Olawale Shopeyin</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="right-protocol">
          <Link to="">
            <div className="preview">
              <div className="left-preview">
                <div className="left">
                  <h2>AI ART AND ITS EFFECT ON WEB3</h2>
                  <p className="author">Michael Shopeyin</p>
                </div>
              </div>
              <div className="right">
                <img src={Astronaut2} alt="preview" />
              </div>
            </div>
            <hr className="rule" />
          </Link>
          <Link to="">
            <div className="preview">
              <div className="left-preview">
                <div className="left">
                  <h2>AI ART AND ITS EFFECT ON WEB3</h2>
                  <p className="author">Michael Shopeyin</p>
                </div>
              </div>
              <div className="right">
                <img src={Astronaut2} alt="preview" />
              </div>
            </div>
            <hr className="rule" />
          </Link>
          <Link to="">
            <div className="preview">
              <div className="left-preview">
                <div className="left">
                  <h2>The Space Model project; Check all about it</h2>
                  <p className="author">Michael Shopeyin</p>
                </div>
              </div>
              <div className="right">
                <img src={Astronaut2} alt="preview" />
              </div>
            </div>
            <hr className="rule" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Protocol;
