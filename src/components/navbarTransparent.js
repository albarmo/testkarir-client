import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./style/navbarTransparent.css";
import logo from "../materials/Logo_navbar.png";
import qoreContext from "../qoreContext";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const NavbarTransparent = () => {
  const { user } = qoreContext.useCurrentUser();
  const history = useHistory();

  const handleLogout = () => {
    Swal.fire({
      title: "Anda ingin logout account ini?",
      showCancelButton: true,
      confirmButtonText: `Logout Account`,
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        localStorage.clear();
        Cookies.remove("token");
        Swal.fire("Logged Out!", "", "success");
        history.push("/");
      }
    });
    console.log("User is logged out, localStorage now is clear");
  };

  return (
    <div className="navbar-transparent">
      <div className="logo">
        <img
          src={logo}
          alt="tes"
          width="60px"
          onClick={() => history.push("/")}
        />
      </div>
      <div className="menu-transparent">
        <p onClick={() => history.push("/freetest")}>Tes Gratis</p>
        <p onClick={() => history.push("/article")}>Belajar Karir</p>
        <p onClick={() => history.push("/")}>Konsultasi Karir</p>
        <p onClick={() => history.push("/")}>Tentang Teskarir</p>
        {user ? (
          <div className="button-navbar" onClick={() => handleLogout()}>
            Logout Account
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

export default NavbarTransparent;
