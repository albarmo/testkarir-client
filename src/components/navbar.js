import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style/navbar.css";
import logo from "../materials/Logo_navbar.png";

const Navbar = () => {
  const history = useHistory();
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={logo}
          alt="tes"
          width="60px"
          onClick={() => history.push("/")}
        />
      </div>
      <div className="menu">
        <p onClick={() => history.push("/test")}>Tes Karir</p>
        <p onClick={() => history.push("/")}>Belajar Karir</p>
        <p onClick={() => history.push("/")}>Konsultasi Karir</p>
        <p onClick={() => history.push("/")}>Tentang Teskarir</p>
        <div className="button-navbar" onClick={() => history.push("/login")}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Navbar;
