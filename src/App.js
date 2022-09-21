import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
        <Navbar/>
        <Home />
        <About />
        <Work/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
