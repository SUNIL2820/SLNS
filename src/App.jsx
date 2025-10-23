import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/About";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="pt-20"> {/* Add padding so content isn't hidden behind Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
