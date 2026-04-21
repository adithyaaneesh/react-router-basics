import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <button onClick={() => navigate("/")}>
        Go Home
      </button>
    </nav>
  );
};

export default Navbar;