import BoxedPageTemplate from "../../templates/BoxedPageTemplate";
import Styles from "./BannerContent.module.css";
import infographic from "../../images/infographic.png";
import WelcomeModal from "../WelcomeModal/WelcomeModal";
import Form from "../form/Form";
import { useState } from "react";

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
            <button onClick={handleBtnClick} className={Styles.button}>
              Tell Me More!
            </button>
            <button onClick={handleBtnClick} className={Styles.button}>
              Not Interested
            </button>
            {interested ? (
              <button onClick={handleBtnClick} className={Styles.button}>
                Close Form
              </button>
            ) : (
              ""
            )}
          </div>

          {interested ? (
            <div onClick={handleBtnClick}>
              <Form
                formData={formData}
                setFormData={setFormData}
                setIsFormSubmitted={setIsFormSubmitted}
              />
            </div>
          ) : (
            ""
          )}

          {isFormSubmitted ? (
            <WelcomeModal
              firstName={formData.firstName}
              setIsFormSubmitted={setIsFormSubmitted}
              interested={interested}
            />
          ) : (
            ""
          )}
        </article>
        <article>
          <img
            src={infographic}
            alt="infographic information"
            className={Styles.img}
          />
        </article>
      </section>
    </BoxedPageTemplate>
  );
};

export default HeroBanner;
