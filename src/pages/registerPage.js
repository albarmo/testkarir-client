import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import "./style/register.css";
import Swal from "sweetalert2";

import Navbar from "../components/navbar";

const RegisterPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [domicile, setDomicile] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmPassword, setConfrimPassword] = useState("");

  const { insertRow, status, error } = qoreContext
    .view("allMembers")
    .useInsertRow();

  async function register() {
    if (password !== confirmPassword) {
      console.log("Confrim passord salah");
      Swal.fire({
        icon: "warning",
        text: "Retype password wrong!",
      });
    }
    await insertRow({
      role: role,
      email: email,
      username: username,
      domicile: domicile,
      password: password,
      passwordShow: confirmPassword,
      birthDate: birthDate,
      status: true,
    });
    if (status == "error") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email adrealy used!",
      });
    }
  }
  if (status == "success") {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success Created Account",
      showConfirmButton: false,
      timer: 4000,
    });
    history.push("/login");
  }
  console.log(status, "<<< status");

  function registerHandler() {
    if (password !== confirmPassword) {
      console.log("Confrim passord salah");
      Swal.fire({
        icon: "warning",
        text: "Retype password wrong!",
      });
    } else {
      register();
      if (status == "error") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email adrealy used!",
        });
      }
    }
  }

  return (
    <>
      <div className="register">
        <Navbar />
        <div className="left-form">
          <form className="form-register">
            <h1 className="header-text">Register</h1>
            <label for="text" className="label-register">
              Username
            </label>
            <input
              className="input-register"
              placeholder="Enter your username here"
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <label for="email" className="label-register">
              Email
            </label>
            <input
              className="input-register"
              placeholder="@email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label for="kota" className="label-register">
              Kota
            </label>
            <input
              className="input-register"
              placeholder="Domisili tempat tinggal"
              type="text"
              name="email"
              onChange={(e) => setDomicile(e.target.value)}
            />

            <label for="email" className="label-register">
              Tanggal Lahir
            </label>
            <input
              className="input-register"
              type="date"
              name="email"
              onChange={(e) => setBirthDate(e.target.value)}
            />

            <label for="password" className="label-register">
              Role
            </label>
            <select
              className="input-register"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="peserta" style={{ color: "black" }}>
                Peserta
              </option>
              <option value="kontributor" style={{ color: "black" }}>
                Kontributor
              </option>
            </select>

            <label for="text" className="label-register">
              Password
            </label>
            <input
              className="input-register"
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <label for="confirmPassword" className="label-register">
              Confrim Password
            </label>
            <input
              className="input-register"
              placeholder="Confrim Password"
              type="password"
              name="confrimPassword"
              onChange={(e) => setConfrimPassword(e.target.value)}
            />
            <div className="button-submit" onClick={() => register()}>
              SUBMIT
            </div>
            <div className="text-link">
              <p>Sudah punya akun?</p>
              <h3
                style={{ color: "#10BBF1", cursor: "pointer" }}
                onClick={() => history.push("/login")}
              >
                Login Disini
              </h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
