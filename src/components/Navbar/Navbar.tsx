import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { BiShare } from "react-icons/bi";
import { useClickOutside } from "@mantine/hooks";
import { Link } from "react-router-dom";
import D from "../../assets/D.png";
import Column from "../../assets/column.png";
import "./Navbar.scss";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TwitterShareButton } from "react-share";
import { Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

const Navbar = () => {
  const currentUrl = window.location.href;
  const [active, setActive] = useState(false);
  const [opened, { toggle }] = useDisclosure(active);
  const clickOutsideRef = useClickOutside(() => setActive(!active));

  const scaleY = {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity",
  };
  const handleToggle = () => {
    setActive(!active);
    toggle();
  };

  return (
    <div className="overview">
      <div className="container">
        <div className="navbar">
          <div className="inner-navbar">
            <div className="hamburger">
              {/* <RxHamburgerMenu
                size={30}
                className="ham-menu"
                onClick={() => setActive(!active)}
              /> */}
              <Burger opened={active} onClick={handleToggle} />
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
      {active ? (
        <Transition
          mounted={active}
          transition={scaleY}
          duration={200}
          timingFunction="ease"
        >
          {(styles) => (
            <div className="overlay" ref={clickOutsideRef}>
              <div className="container-overlay">
                <div className="overlay-navlinks">
                  <Burger opened={active} onClick={handleToggle} />
                  <CiSearch />
                  <Link to="/post/1" onClick={handleToggle}>
                    click
                  </Link>
                  {/* <div className="sharethis-sticky-share-buttons"></div> */}
                  <TwitterShareButton url={currentUrl} title="Hello">
                    <BiShare />
                  </TwitterShareButton>
                </div>
              </div>
            </div>
          )}
        </Transition>
      ) : null}
    </div>
  );
};

export default Navbar;
