import React from "react";
import "./Article.scss";
import ArticleImg from "../../assets/article.png";
import { CiSearch } from "react-icons/ci";
import Astronaut from "../../assets/astronaut.png";
import Astronaut2 from "../../assets/astronaut2.png";
import { Link } from "react-router-dom";
import SearchPreview from "../../components/SearchPreview/SearchPreview";
import Protocol from "../../components/Protocol/Protocol";

const Article = () => {
  return (
    <div className="container">
      <div className="article-container">
        <div className="left-article">
          <div className="article-banner">
            <img src={ArticleImg} alt="article" />
            <h1 className="article-title">BEGINNER’S GUIDE TO DEFI</h1>
          </div>
          <div className="main-article">
            <h1 className="main-title">Everything you must know about web3</h1>
            <div className="category-date">
              <p>Defi Guides</p>
              <p>Feb 19, 2023</p>
            </div>
            <p className="article-content">
              The second installation of the Metaverse Fashion Week is set to
              take place towards the end of this march. The four-day event will
              run from March 28 to 31 and will build on last year’s successful
              debut. However, this year, brands, and other stakeholders involved
              will try something different. This year’s event is themed “Future
              Heritage.” Thus, attendees can expect to see the opening of a
              brand-new fashion plaza that will focus on showcasing emerging
              designers. The goal is to highlight and encourage collaborations
              between established brands and these emerging talents. According
              to Giovanna Casimir, the Metaverse producer for meta in charge of
              its fashion week, this is a way to “bring a more critical
              discussion on the future of fashion” and connect the dots between
              innovation, legacy, and tradition.
            </p>
            <p className="article-content">
              The second installation of the Metaverse Fashion Week is set to
              take place towards the end of this march. The four-day event will
              run from March 28 to 31 and will build on last year’s successful
              debut. However, this year, brands, and other stakeholders involved
              will try something different. This year’s event is themed “Future
              Heritage.” Thus, attendees can expect to see the opening of a
              brand-new fashion plaza that will focus on showcasing emerging
              designers. The goal is to highlight and encourage collaborations
              between established brands and these emerging talents. According
              to Giovanna Casimir, the Metaverse producer for meta in charge of
              its fashion week, this is a way to “bring a more critical
              discussion on the future of fashion” and connect the dots between
              innovation, legacy, and tradition.
            </p>
            <p className="article-content">
              The second installation of the Metaverse Fashion Week is set to
              take place towards the end of this march. The four-day event will
              run from March 28 to 31 and will build on last year’s successful
              debut. However, this year, brands, and other stakeholders involved
              will try something different. This year’s event is themed “Future
              Heritage.” Thus, attendees can expect to see the opening of a
              brand-new fashion plaza that will focus on showcasing emerging
              designers. The goal is to highlight and encourage collaborations
              between established brands and these emerging talents. According
              to Giovanna Casimir, the Metaverse producer for meta in charge of
              its fashion week, this is a way to “bring a more critical
              discussion on the future of fashion” and connect the dots between
              innovation, legacy, and tradition.
            </p>
          </div>
        </div>
        <div className="right-article">
          <SearchPreview />
        </div>
      </div>
    </div>
  );
};

export default Article;
