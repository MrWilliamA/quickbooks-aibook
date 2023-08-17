import Nav from "./navigation/Nav";
import BannerContent from "./BannerContent";
import HeroImage from "../../images/hero-image.webp";
import Styles from "../../styles/Header.module.css";

const Header = ({ darkTheme, setDarkTheme }) => {
  const heroImage = {
    backgroundImage: `url(${HeroImage})`,
  };

  return (
    <section style={heroImage} className={Styles.heroSection}>
      <div className={Styles.overlay}></div>
      <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <BannerContent />
    </section>
  );
};

export default Header;
