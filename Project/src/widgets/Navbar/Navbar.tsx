import React from "react";
import classes from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  

  return <button onClick={() => navigate('/Lending')}>asdasdasd</button>;
};
export default Navbar;
