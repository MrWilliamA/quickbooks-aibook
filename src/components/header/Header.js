import Nav from "./Nav";
import BannerContent from "./BannerContent";
import Styles from "../../styles/Header.module.css";
import HeroImage from "../../images/hero-image.webp";

const Header = () => {
  const heroImage = {
    backgroundImage: `url(${HeroImage})`,
    minHeight: "75vh",
  };

  return (
    <section style={heroImage}>
      <div className={Styles.overlay}></div>
      <Nav />
      <BannerContent />
    </section>
  );
};

export default Header;
