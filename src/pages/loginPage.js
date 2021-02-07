import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RegsiterPage } from ".";
import qoreContext from "../qoreContext";
import Navbar from "../components/navbar";
import Swal from "sweetalert2";

import "./style/login.css";

const LoginPage = () => {
  const history = useHistory();
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // CORE SDK
  // get user example and test
  const { data: authData, statusAuth, errorAuth } = qoreContext
    .view("allMember")
    .useListRow({ order: "asc" });

  // component function
  function emailHandler(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  function passwordHandler(e) {
    e.preventDefault();
    setPassword(e.target.value);
    //
  }
  function goToRegister() {
    history.push("/register");
  }

  function login(e) {
    e.preventDefault();
    let userCheck = authData.filter(function (user) {
      return user.email === email;
    });
    if (userCheck.length > 0) {
      console.log(`user ada! email => ${userCheck[0].email}`);
      console.log(`user ada! email => ${userCheck[0].password}`);
      if (userCheck[0].passwordShow == password) {
        console.log("GENERATE TOKEN");
        history.push(`/profile/${userCheck[0].id}`);
      } else if (userCheck[0].passwordShow != password) {
        Swal.fire({
          icon: "warning",
          text: "email or password wrong!",
        });
      }
    } else if (userCheck.length == 0) {
      let userCheckByUsername = authData.filter(function (user) {
        return user.username === email;
      });
      if (userCheckByUsername.length >= 1) {
        console.log("user ada! username =>", userCheckByUsername[0].username);
        if (userCheckByUsername[0].passwordShow == password) {
          console.log("GENERATE TOKEN");
          history.push(`/profile/${userCheckByUsername[0].id}`);
        } else if (userCheckByUsername[0].passwordShow != password) {
          Swal.fire({
            icon: "warning",
            text: "email or password wrong!",
          });
        }
      } else {
        console.log("user tidak ada");
      }
    }
  }

  // const Client = qoreContext.useClient();
  // const handleLogout = () => {
  //   // cokies.remove("token");
  // };
  // const handleLogin = async (email, password) => {
  //   const token = await Client.authenticate(email, password);
  //   // cookies.set("token", token);
  //   console.log(token, "tokennn");
  // };

  // qoreContext.js
  // give qore client a way to access user token

  return (
    <>
      <div className="login">
        <Navbar />
        <div className="container-login">
          <div className="left-form-login">
            <h1 className="header-text">LoginPage</h1>
            <form className="form-login">
              <label className="label-login" for="email">
                Email or Password
              </label>
              <input
                className="input-login"
                type="text"
                name="email"
                placeholder="Enter your email here.."
                onChange={(e) => emailHandler(e)}
                required
              />
              <label for="password" className="label-login">
                Password
              </label>
              <input
                className="input-login"
                name="password"
                placeholder="Ssst, Password heree!"
                type="password"
                placeholder="password"
                onChange={(e) => passwordHandler(e)}
                required
              />
            </form>
            <div className="button-login" onClick={(e) => login(e)}>
              LOGIN
            </div>
            <div className="text-link-login">
              <p>Belum punya akun?</p>
              <h3
                style={{ color: "#10BBF1", cursor: "pointer" }}
                onClick={() => history.push("/register")}
              >
                Registrasi Disini
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
