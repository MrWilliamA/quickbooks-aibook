import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/Content";
import useLocalStorage from "use-local-storage";

function App() {
  //set dark/light theme and save to local storage
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkTheme, setDarkTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
    <section className="app" data-theme={darkTheme}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Content />
      <Footer />
    </section>
  );
}

export default App;
