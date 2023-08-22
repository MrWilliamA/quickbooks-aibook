import BoxedPageTemplate from "../../../templates/BoxedPageTemplate";
import Styles from "./BannerContent.module.css";
import infographic from "../../../images/infographic.png";
import WelcomeModal from "../../WelcomeModal/WelcomeModal";
import Form from "../../form/Form";
import { useState } from "react";
import Button from "../button/Button";
import FadeIn from "react-fade-in";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const HeroBanner = ({ darkTheme }) => {
  const [interested, setInterested] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //handle submit for all three form buttons.
  const handleBtnClick = (event) => {
    if (event.target.innerText === "Tell Me More!") {
      setInterested(true);
      setIsFormSubmitted(false);
    } else if (event.target.innerText === "Not Interested") {
      setInterested(false);
      setIsFormSubmitted(true);
    } else if (event.target.innerText === "Close Form") {
      setInterested(false);
      setIsFormSubmitted(false);
    }
  };

  return (
    <BoxedPageTemplate darkTheme={darkTheme}>
      <section className={Styles.heroText}>
        <article className={Styles.text}>
          <h1>About AI Books</h1>
          <p className={Styles.tagline}>A great new feature by Quickbooks.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vulputate vel nibh non egestas. Sed felis velit, laoreet ac elit
            quis, tempor tristique leo. Praesent sapien felis, rhoncus sit amet
            tellus ac, viverra ultricies justo.
          </p>
          <div className={Styles.btnRow}>
            <Button text="Tell Me More!" handleBtnClick={handleBtnClick} />
            <Button text="Not Interested" handleBtnClick={handleBtnClick} />
            {interested ? (
              <FadeIn>
                <Button text="Close Form" handleBtnClick={handleBtnClick} />
              </FadeIn>
            ) : (
              ""
            )}
          </div>

          {interested ? (
            <div className={Styles.formContainer}>
              <FadeIn transitionDuration={800}>
                <Form
                  formData={formData}
                  setFormData={setFormData}
                  setIsFormSubmitted={setIsFormSubmitted}
                />
              </FadeIn>
            </div>
          ) : (
            ""
          )}

          {isFormSubmitted ? (
            <div className={Styles.modalContainer}>
              <FadeIn transitionDuration={800}>
                <WelcomeModal
                  firstName={formData.firstName}
                  setIsFormSubmitted={setIsFormSubmitted}
                  interested={interested}
                />
              </FadeIn>
            </div>
          ) : (
            ""
          )}
        </article>
        <article>
          <LazyLoadImage
            src={infographic}
            alt="infographic information"
            effect="opacity"
            className={Styles.img}
          />
        </article>
      </section>
    </BoxedPageTemplate>
  );
};

export default HeroBanner;
