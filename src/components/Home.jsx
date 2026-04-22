import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        textAlign: "center"}}>
        <h1>This is the home page </h1>
      <h2>{theme.toUpperCase()} MODE</h2>

      <button onClick={toggleTheme}>Toggle Theme</button>
      <h3>Products</h3>

      <Link to="/product/1">Product 1</Link><br />
      <Link to="/product/2">Product 2</Link><br />
      <Link to="/product/3">Product 3</Link>
    </div>
    </>
  );
};
export default Home;