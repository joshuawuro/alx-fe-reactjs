import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Services from "./assets/components/Services";
import Contact from "./assets/components/Contact";
import Navbar from "./assets/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
