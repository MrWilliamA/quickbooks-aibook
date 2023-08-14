import Logo from "../../images/ai-books-logo.png";
import Styles from "../../styles/Header.module.css";
const Nav = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>
        <img src={Logo} alt="ai books Logo" />
        <h1>
          <a href="#">AI BOOKS</a>
        </h1>
      </div>
      <ul className={Styles.navMenu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
