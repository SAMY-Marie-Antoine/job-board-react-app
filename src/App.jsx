import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Jobs from "./components/Jobs";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {
        <div className="header">
          <Header />
        </div>
      }

      {
        <div class="container">
          <Jobs />
        </div>
      }
      {
        <div className="footer">
          <Footer footer="Made withe React at Le Reacteur By SAMY" />
        </div>
      }
    </>
  );
}

export default App;
