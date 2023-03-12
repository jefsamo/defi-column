import { Link } from "react-router-dom";
import PreviewImg from "../../assets/preview.png";
import "./Preview.scss";

const Preview = () => {
  return (
    <Link to="">
      <div className="preview">
        <div className="left-preview">
          <div className="left">
            <h2>AI ART AND ITS EFFECT ON WEB3</h2>
            <p className="author">Michael Shopeyin</p>
          </div>
          <div className="date-category">
            <p className="date"> 19 Feb. 2023</p>
            <p className="category">NFTs</p>
          </div>
        </div>
        <div className="right">
          <img src={PreviewImg} alt="preview" />
        </div>
      </div>
      <hr className="rule" />
    </Link>
  );
};

export default Preview;
