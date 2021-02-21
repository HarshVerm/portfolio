// import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Projects } from "./Pages/Projects/Projects";
import { Contact } from "./Pages/Contact/Contact";
import { Navbar } from "./Components/Navbar/Navbar";
import { Skills } from "./Pages/Skills/Skills";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
