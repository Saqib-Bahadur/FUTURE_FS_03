import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Membership from "./components/Membership";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen">

      <Navbar />

      <Hero />

      <About />

      <Programs />

      <Membership />

      <Trainers />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;