import "./App.css";
import Jobs from "./components/Jobs";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Jobs />
      <Footer footer="Made withe React at Le Reacteur By SAMY" />
    </div>
  );
}

export default App;
