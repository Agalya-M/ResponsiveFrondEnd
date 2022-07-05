import React from "react";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Cards from "./components/cards";
import Footer from "./components/footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer/>
    </>
  );
}

export default App;
