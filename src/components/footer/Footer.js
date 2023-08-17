import Styles from "../../styles/Footer.module.css";
import BoxedPageTemplate from "../../templates/BoxedPageTemplate";
import Logo from "../../images/ai-books-logo.svg";

const Footer = () => {
  return (
    <section className={Styles.footer}>
      <BoxedPageTemplate>
        <article>
          <img src={Logo} alt="Ai Books - Quickbooks new app" width="80px" />
        </article>
      </BoxedPageTemplate>
    </section>
  );
};

export default Footer;
