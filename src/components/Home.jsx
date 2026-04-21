import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

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
    </div>
    </>
    
  );
};
export default Home;