import Styles from "./Button.module.css";

const Button = ({ handleBtnClick, text = "Click Here" }) => {
  return (
    <>
      <button onClick={handleBtnClick} className={Styles.button}>
        {text}
      </button>
    </>
  );
};

export default Button;
