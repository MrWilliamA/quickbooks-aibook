import BoxedPageTemplate from "../../templates/BoxedPageTemplate";
import Styles from "../../styles/BannerContent.module.css";

const HeroBanner = () => {
  return (
    <BoxedPageTemplate>
      <section className={Styles.heroText}>
        <article className={Styles.text}>
          <h1>About AI Books</h1>
          <p>A great new feature by Quickbooks</p>
        </article>
        <article className={Styles.form}>form goes here</article>
      </section>
    </BoxedPageTemplate>
  );
};

export default HeroBanner;
