import About from "../components/about";
import Contact from "../components/contact";
import Resume from "../components/resume";
import Portfolio from "../components/portfolio";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Home from "../components/home"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
