import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Projects } from "./Pages/Projects/Projects";
import { Contact } from "./Pages/Contact/Contact";
import { Navbar } from "./Components/Navbar/Navbar";
import { Skills } from "./Pages/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
