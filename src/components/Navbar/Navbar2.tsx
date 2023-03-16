import { IconArrowUp } from "@tabler/icons-react";
import {
  useClickOutside,
  useDisclosure,
  useWindowScroll,
} from "@mantine/hooks";
import { Affix, Button, Text, Transition, rem, Burger } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import D from "../../assets/D.png";
import Column from "../../assets/column.png";
import { CiSearch } from "react-icons/ci";
import { TwitterShareButton } from "react-share";
import { BiShare } from "react-icons/bi";
import "./Navbar.scss";

function Navbar2() {
  const [scroll, scrollTo] = useWindowScroll();
  const currentUrl = window.location.href;
  const [active, setActive] = useState(false);
  const clickOutsideRef = useClickOutside(() => setActive(false));
  const [opened, { toggle }] = useDisclosure(false);

  const scaleY = {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity",
  };
  const handleToggle = () => {
    toggle();
    setActive(!active);
  };

  return (
    <>
      <Affix position={{ top: rem(0) }}>
        <Transition transition="slide-up" mounted={scroll.y > 20}>
          {(transitionStyles) => (
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
                      <Burger opened={opened} onClick={handleToggle} />
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
                          <Burger opened={opened} onClick={handleToggle} />
                          <CiSearch />
                          {/* <div className="sharethis-sticky-share-buttons"></div> */}
                          <TwitterShareButton url={currentUrl} title="Hello">
                            <BiShare />
                          </TwitterShareButton>
                        </div>
                      </div>
                    </div>
                  )}
                </Transition>
              ) : (
                ""
              )}
            </div>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default Navbar2;
