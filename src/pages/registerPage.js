import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import "./style/register.css";
import Swal from "sweetalert2";
import axios from "axios";

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
  const [fullname, setFullname] = useState("");
  const [identityNumber, setNumberIdentify] = useState("");
  const [instance, setInstance] = useState("");
  const [educational, setEducational] = useState("");
  const [gender, setGender] = useState("");

  // clear all data state on component did mount
  useEffect(() => {
    setEmail("");
    setUsername("");
    setDomicile("");
    setBirthDate("");
    setBirthDate("");
    setPassword("");
    setConfrimPassword("");
    setConfrimPassword("");
    setPassword("");
  }, []);

  // const { send, status } = qoreContext.view("allMember").useForm("createUser");
  // console.log(status, "status register");

  // async function register() {
  //   if (password !== confirmPassword) {
  //     console.log("Confrim passord salah");
  //     Swal.fire({
  //       icon: "warning",
  //       text: "Retype password wrong!",
  //     });
  //   } else if (password == confirmPassword) {
  //     await send({
  //       email: email,
  //       username: username,
  //       password: password,
  //       birthDate: birthDate,
  //       domicile: domicile,
  //     })
  //       .then((data) => {
  //         console.log(data);
  //         Swal.fire({
  //           position: "center",
  //           icon: "success",
  //           title: "Success Created Account",
  //           showConfirmButton: false,
  //           timer: 3000,
  //         });
  //         history.push("/login");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: "Email adrealy used!",
  //         });
  //       });
  //   }
  // }

  // const { insertRow, status } = qoreContext.view("allMember").useInsertRow();
  // console.log(status, "status register");

  // async function register() {
  //   if (password !== confirmPassword) {
  //     console.log("Confrim passord salah");
  //     Swal.fire({
  //       icon: "warning",
  //       text: "Retype password wrong!",
  //     });
  //   } else if (password == confirmPassword) {
  //     await insertRow({
  //       email: email,
  //       username: username,
  //       domicile: domicile,
  //       password: password,
  //       birthDate: birthDate,
  //       status: true,
  //     })
  //       .then((data) => {
  //         console.log(data);
  //         Swal.fire({
  //           position: "center",
  //           icon: "success",
  //           title: "Success Created Account",
  //           showConfirmButton: false,
  //           timer: 3000,
  //         });
  //         history.push("/login");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: "Email adrealy used!",
  //         });
  //       });
  //   }
  // }

  async function register() {
    if (password !== confirmPassword) {
      console.log("Confrim passord salah");
      Swal.fire({
        icon: "warning",
        text: "Retype password wrong!",
      });
    } else if (password == confirmPassword) {
      axios({
        method: "POST",
        url:
          "https://prod-qore-app.qorebase.io/U6NDz2mu562iqwj/allMember/forms/createUser",
        data: {
          email: email,
          username: username,
          domicile: domicile,
          password: password,
          birthDate: birthDate,
          fullname: fullname,
          identityNumber: identityNumber,
          instansi: instance,
          educational: educational,
          gender: gender,
        },
        headers: {
          "X-Qore-Authentication": "46f76c79-e957-4c0b-812c-687ac36f6360",
        },
      })
        .then((data) => {
          console.log(data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success Created Account",
            showConfirmButton: false,
            timer: 3000,
          });
          history.push("/login");
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email adrealy used!",
          });
        });
    }
  }

  return (
    <>
      <div className="register">
        <Navbar />
        {email}
        <div className="left-form">
          <form className="form-register">
            <h1 className="header-text">Register</h1>
            <label htmlFor="text" className="label-register">
              Username
            </label>
            <input
              className="input-register"
              placeholder="Enter your username here"
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email" className="label-register">
              Email
            </label>
            <input
              className="input-register"
              placeholder="@email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="kota" className="label-register">
              Kota
            </label>
            <input
              className="input-register"
              placeholder="Domisili tempat tinggal"
              type="text"
              name="email"
              onChange={(e) => setDomicile(e.target.value)}
            />

            <label htmlFor="password" className="label-register">
              Gender
            </label>
            <select
              className="input-register"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male" style={{ color: "black" }}>
                Laki Laki
              </option>
              <option value="female" style={{ color: "black" }}>
                wanita
              </option>
            </select>

            <label htmlFor="email" className="label-register">
              Tanggal Lahir
            </label>
            <input
              className="input-register"
              type="date"
              name="email"
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <label htmlFor="fullname" className="label-register">
              Nama lengkap
            </label>
            <input
              className="input-register"
              type="text"
              name="text"
              onChange={(e) => setFullname(e.target.value)}
              placeholder="nama lengkap anda"
            />

            <label htmlFor="nik" className="label-register">
              Nomor Identitas
            </label>
            <input
              className="input-register"
              type="number"
              name="nik"
              onChange={(e) => setNumberIdentify(e.target.value)}
              placeholder="--- --- --- ----"
            />

            <label htmlFor="instance" className="label-register">
              Instansi / Intuisi
            </label>
            <input
              className="input-register"
              type="text"
              name="instance"
              onChange={(e) => setInstance(e.target.value)}
              placeholder="masukann instansi atau intuisi"
            />

            <label htmlFor="education" className="label-register">
              Pendidikan Terakhir
            </label>
            <input
              className="input-register"
              type="text"
              name="education"
              onChange={(e) => setEducational(e.target.value)}
              placeholder="masukann pendidikan terakhir anda"
            />

            <label htmlFor="text" className="label-register">
              Password
            </label>
            <input
              className="input-register"
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword" className="label-register">
              Confrim Password
            </label>
            <input
              className="input-register"
              placeholder="Confrim Password"
              type="password"
              name="confrimPassword"
              onChange={(e) => setConfrimPassword(e.target.value)}
            />
            <div className="button-submit-register" onClick={() => register()}>
              SUBMIT
            </div>
            <div className="text-link-register">
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
