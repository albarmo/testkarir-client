import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style/navbar.css";

const Navbar = () => {
  const history = useHistory();
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="http://teskarir.com/wp-content/uploads/2020/06/imageedit_17_9008611935-150x150.png"
          alt="tes"
          width="60%"
        />
      </div>
      <div className="menu">
        <p onClick={() => history.push("/")}>Home</p>
        <p onClick={() => history.push("/test")}>Tes</p>
        <p onClick={() => history.push("/")}>Belajar Karir</p>
        <p onClick={() => history.push("/")}>Konsultasi Karir</p>
        <p onClick={() => history.push("/")}>Tentang Teskarir</p>
        <div className="button-navbar">Buat Akun</div>
      </div>
    </div>
  );
};

export default Navbar;
