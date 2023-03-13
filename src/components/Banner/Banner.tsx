import "./Banner.scss";
import BannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <h1 className="title">SUI AIRDROP - WHY YOU SHOULD GET IT!</h1>
        <p>Olawale J. Shopeyin</p>
        <div className="banner-container">
          <img src={BannerImg} alt="" className="banner-img" />
          <h2 className="description">
            AN IN-DEPTH ANALYSIS OF THE SUI ECOSYSTEM AND ITS AIRDROP
          </h2>
          <p>Research piece</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
