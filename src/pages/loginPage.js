import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import Navbar from "../components/navbar";
import Swal from "sweetalert2";
import "./style/login.css";
import clientAuth from "../qoreContext";

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let access_token = localStorage.getItem("access_token");

  useEffect(() => {
    if (access_token) {
      console.log("access token ada");
      // let idParams = localStorage.getItem("user_id");
      // history.push(`/profile/${idParams}`);
    }
  }, []);

  // login authentification
  const { data: authData, statusAuth, errorAuth } = qoreContext
    .view("authData")
    .useListRow({ order: "asc" });
  // get current user

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
  const handleLogout = () => {
    localStorage.clear();
    console.log("User is logged out, localStorage now is clear");
  };

  function getUserID(email) {
    let userCheck = authData.filter(function (user) {
      return user.email === email;
    });
    if (userCheck.length > 0) {
      console.log(`user ada! email => ${userCheck[0].email}`);
      console.log(`user ada! email => ${userCheck[0].id}`);
    }
    return userCheck[0].id;
  }

  const client = qoreContext.useClient();

  const handleLogin = async (email, password) => {
    console.log("login clicked");
    try {
      const token = await client.authenticate(email, password);
      localStorage.setItem("access_token", token);
      console.log(token, "user tokenn");
      console.log(
        localStorage.getItem("access_token"),
        "<<< from localStorage"
      );
      console.log(getUserID(email));
      let idX = getUserID(email);
      console.log(idX, "idxxx");
      localStorage.setItem("user_id", idX);
      let idParams = localStorage.getItem("user_id");
      history.push(`/profile/${idParams}`);
    } catch (error) {
      console.log(error.message);
      if (error.message == "Request failed with status code 400") {
        Swal.fire({
          title: "Uupps!",
          text: "Jangan lupa masukan email dan password.",
          imageUrl:
            "https://images.vexels.com/media/users/3/193270/isolated/preview/1665b158b55ec87c9c7c6cebc3d702d0-covid-19-symptom-character-headache-by-vexels.png",
          imageWidth: 300,
          imageHeight: 300,
          imageAlt: "imageModal",
        });
      } else if (error.message == "Request failed with status code 401") {
        Swal.fire({
          title: "Email atau password salah!",
          text: "harap masukan email dan password dengan baik ya",
        });
      }
    }
  };

  return (
    <>
      {/* ---------------- test --------------------------------*/}
      <button onClick={() => handleLogout()}>Virtual Logout</button>
      {/* ---------------- test --------------------------------*/}

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
            <div
              className="button-login"
              onClick={(e) => handleLogin(email, password)}
            >
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
