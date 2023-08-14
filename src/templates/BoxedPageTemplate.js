import Styles from "../styles/BoxedPageTemplate.module.css";

const PageTemplate = ({ children }) => {
  return <div className={Styles.pageContainer}>{children}</div>;
};

export default PageTemplate;
