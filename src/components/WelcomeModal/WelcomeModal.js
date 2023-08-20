import Style from "./WelcomeModal.module.css";

const WelcomeModal = ({ firstName, setIsFormSubmitted, interested }) => {
  // Close the modal
  const handleClick = () => {
    setIsFormSubmitted(false);
  };

  return (
    <modal className={Style.module}>
      <p className={Style.text}>
        {interested ? (
          <>
            Great to have you onboard,
            <strong className="bold-text"> {firstName}</strong>!
          </>
        ) : (
          "Can't win 'em all, maybe next time!"
        )}
      </p>
      <button onClick={handleClick} className={Style.close}>
        CLOSE
      </button>
    </modal>
  );
};

export default WelcomeModal;
