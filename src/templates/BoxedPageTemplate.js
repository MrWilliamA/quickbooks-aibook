import Styles from "../styles/BoxedPageTemplate.module.css";

const PageTemplate = ({ children }) => {
  const backgroundOverlay = {
    background: "linear-gradient(transparent 0%, var(--primary-color) 75% )",
  };

  return (
    <div className={Styles.pageContainer} style={backgroundOverlay}>
      {children}
    </div>
  );
};

export default PageTemplate;
