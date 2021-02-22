import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
        <p onClick={() => history.push("/test")}>Tes Karir</p>
        <p onClick={() => history.push("/article")}>Belajar Karir</p>
        <p onClick={() => history.push("/")}>Konsultasi Karir</p>
        <p onClick={() => history.push("/")}>Tentang Teskarir</p>
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
