import Style from "../../styles/WelcomeModal.module.css";

const WelcomeModal = ({ firstName, setIsFormSubmitted }) => {
  const handleClick = () => {
    setIsFormSubmitted(false);
  };

  return (
    <modal className={Style.module}>
      <p className={Style.text}>
        Great to have you onboard, <strong>{firstName}</strong>!
      </p>
      <button onClick={handleClick} className={Style.close}>
        CLOSE
      </button>
    </modal>
  );
};

export default WelcomeModal;
