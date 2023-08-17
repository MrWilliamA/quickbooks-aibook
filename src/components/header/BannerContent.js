import BoxedPageTemplate from "../../templates/BoxedPageTemplate";
import Styles from "../../styles/BannerContent.module.css";
import infographic from "../../images/infographic.png";
import WelcomeModal from "../WelcomeModal/WelcomeModal";
import Form from "../form/Form";
import { useState } from "react";

const HeroBanner = ({ darkTheme }) => {
  const [interested, setInterested] = useState(false);
  const [notInterested, setNotInterested] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleBtnClick = (event) => {
    if (event.target.innerText === "Not Interested") {
      setNotInterested(false);
      setInterested(false);
    } else if (event.target === event.currentTarget) {
      setInterested(!interested);
      setNotInterested(true);
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

          {notInterested ? "" : "Can't win 'em all, maybe next time!"}

          {isFormSubmitted ? (
            <WelcomeModal
              firstName={formData.firstName}
              setIsFormSubmitted={setIsFormSubmitted}
            />
          ) : (
            ""
          )}
        </article>
        <article className={Styles.form}>
          <img src={infographic} alt="infographic information" />
        </article>
      </section>
    </BoxedPageTemplate>
  );
};

export default HeroBanner;
