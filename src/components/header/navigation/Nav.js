import Logo from "../../../images/ai-books-logo.svg";
import Styles from "../Header.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ToggleDark from "../../ToggleDarkTheme";
import { BiMenu } from "react-icons/bi";

const Nav = ({ darkTheme, setDarkTheme }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener to change header background color on scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = [
    Styles.header,
    darkTheme === "light" ? Styles.light : Styles.dark,
    isMobile ? Styles.mobile : "",
    !menuOpen ? Styles.open : "",
    isScrolled ? Styles.scrolled : "",
  ].join(" ");

  return (
    <Router>
      <header className={headerClasses}>
        <nav
          className={`${Styles.logo} ${
            darkTheme === "light" ? Styles.light : Styles.dark
          }`}
        >
          <div className={Styles.LogoContainer}>
            <a href="/">
              <img src={Logo} alt="ai books Logo" />
            </a>
          </div>
          <div>
            <p className={Styles.headerTitle}>
              <a href="/">AI BOOKS</a>
            </p>
          </div>
        </nav>
        {isMobile && menuOpen ? (
          <BiMenu onClick={toggleMenu} />
        ) : (
          <ul
            className={`${Styles.navMenu} ${
              isMobile && menuOpen ? "mobile" : "desktop"
            }`}
          >
            <li>
              <a href="/">Home {isMobile}</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <ToggleDark darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            {isMobile ? (
              <li onClick={toggleMenu} className={Styles.close}>
                CLOSE
              </li>
            ) : (
              ""
            )}
          </ul>
        )}
      </header>
    </Router>
  );
};

export default Nav;
