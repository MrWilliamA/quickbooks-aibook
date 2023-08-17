import Logo from "../../../images/ai-books-logo.svg";
import Styles from "../../../styles/Header.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ToggleDark from "../../ToggleDarkTheme";

const Nav = ({ darkTheme, setDarkTheme }) => {
  return (
    <Router>
      <header className={Styles.header}>
        <nav className={Styles.logo}>
          <a href="/">
            <img src={Logo} alt="ai books Logo" />
          </a>
          <p className={Styles.headerTitle}>
            <a href="/">AI BOOKS</a>
          </p>
        </nav>
        <ul className={Styles.navMenu}>
          <li>
            <a href="/">Home</a>
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
        </ul>
      </header>
    </Router>
  );
};

export default Nav;
