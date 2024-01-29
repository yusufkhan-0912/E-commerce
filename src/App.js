import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Singleproduct from "./Singleproduct";
import Cart from "./Cart";
import Errorpage from "./Errorpage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Singleproduct/:id" element={<Singleproduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </Router>
  </>
);

export default App;
