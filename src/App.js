import React, { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/NavBar";
import User from "./components/User";
import Product from "./components/Product";

const App = () => {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/product/:id" element={<Product />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </ThemeContext.Provider>
    </>
    
  );
};

export default App;