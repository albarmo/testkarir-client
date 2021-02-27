import { useEffect, useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import "./style/navbar.css";
import logo from "../materials/Logo_navbar.png";
import qoreContext from "../qoreContext";

const Navbar = () => {
  const { user } = qoreContext.useCurrentUser();
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
        <p onClick={() => history.push("/freetest")}>Tes Gratis</p>
        <p onClick={() => history.push("/article")}>Belajar Karir</p>
        <a
          href="https://api.whatsapp.com/send?phone=6285964015420&text=halo%20tim%20teskarir%2C%20saya%20mau%20tanya...."
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>Konsultasi Karir</p>
        </a>
        <p onClick={() => history.push("/about")}>Tentang Teskarir</p>
        {user ? (
          <div
            className="button-navbar"
            onClick={() => history.push(`/profile/${user.data.id}`)}
          >
            {user.data.email}
          </div>
        ) : (
          <div className="button-navbar" onClick={() => history.push("/login")}>
            Login
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
