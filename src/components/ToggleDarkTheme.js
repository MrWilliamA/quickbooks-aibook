import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Styles from "./DarkTheme.module.css";

const ToggleDark = ({ darkTheme, setDarkTheme }) => {
  const switchTheme = () => {
    const newTheme = darkTheme === "light" ? "dark" : "light";
    setDarkTheme(newTheme);
  };
  return (
    <>
      <button onClick={switchTheme} className={Styles.btn}>
        {darkTheme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </>
  );
};

export default ToggleDark;
