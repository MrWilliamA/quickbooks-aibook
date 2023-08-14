import Logo from "../../../images/ai-books-logo.png";
import Styles from "../../../styles/Header.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <Router>
      <header className={Styles.header}>
        <nav className={Styles.logo}>
          <img src={Logo} alt="ai books Logo" />
          <h1>
            <a href="/">AI BOOKS</a>
          </h1>
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
        </ul>
      </header>
    </Router>
  );
};

export default Nav;
