import { QoreClient } from "@feedloop/qore-client";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RegsiterPage } from ".";
import qoreContext from "../qoreContext";
import Navbar from "../components/navbar";

import "./style/login.css";

const LoginPage = () => {
  const history = useHistory();
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // CORE SDK
  // get user example and test
  const { data: allMembers, status, error } = qoreContext
    .view("allMembers")
    .useListRow({ limit: 100, order: "asc" }, { pollInterval: 500 });

  const { data: authData, statusAuth, errorAuth } = qoreContext
    .view("allMembers")
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
  // authentification user login give token
  // const client = new QoreClient({
  //   ...config,
  //   getToken: () => cookies.get("token"),
  // });
  // const token = await client.authenticate(email, password);
  // console.log(token, "<<< ada ga tokenya");
  // cookies.set("token", token);
  function login(e) {
    e.preventDefault();
    let userCheck = authData.filter(function (user) {
      return user.email === email;
    });
    if (userCheck.length > 0) {
      console.log(`user ada! email => ${userCheck[0].email}`);
      console.log(`user ada! email => ${userCheck[0].password}`);
      if (userCheck[0].password == password) {
        console.log("GENERATE TOKEN");
      }
    } else if (userCheck.length == 0) {
      let userCheckByUsername = authData.filter(function (user) {
        return user.username === email;
      });
      if (userCheckByUsername.length >= 1) {
        console.log("user ada! username =>", userCheckByUsername[0].username);
        if (userCheckByUsername[0].password == password) {
          console.log("GENERATE TOKEN");
        }
      } else {
        console.log("user tidak ada");
      }
    }
  }

  return (
    <>
      <div className="login">
        <Navbar />
        {email}
        {password}
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
            <div className="button-submit" onClick={(e) => login(e)}>
              LOGIN
            </div>
            <div className="text-link">
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
