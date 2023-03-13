import "./Popular.scss";
import PopularImg from "../../assets/popular.png";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <Link to="">
      <div className="popular">
        <h1 className="number">1</h1>
        <div className="desc-details">
          <h2 className="desc">
            The future of Web3 and its existential benefits
          </h2>
          <p className="author">Olawale Shopeyin</p>
        </div>
        <img src={PopularImg} alt="popular" />
      </div>
    </Link>
  );
};

export default Popular;
