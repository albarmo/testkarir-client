import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import "./style/register.css";
import Swal from "sweetalert2";
import Navbar from "../components/navbar";
import validator from "validator";

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
  const [dataValdiator, updateDataValidator] = useState({ email: false });

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

  const { send, status } = qoreContext.view("allMember").useForm("createUser");
  console.log(status, "status register");

  function isValidId(id) {
    let regexKtp = /^((1[1-9])|(21)|([37][1-6])|(5[1-4])|(6[1-5])|([8-9][1-2]))[0-9]{2}[0-9]{2}(([0-6][0-9])|(7[0-1]))((0[1-9])|(1[0-2]))([0-9]{2})[0-9]{4}$/.test(
      id
    );
    return regexKtp;
  }

  async function idValidationHandler() {
    let regex = isValidId(identityNumber);
    console.log(regex);
    if (regex) {
      setNumberIdentify(identityNumber);
    } else if (!regex) {
      Swal.fire("Tolong masukan Nomor Identitas dengan benar");
    }
  }

  async function register() {
    let isIdValid = idValidationHandler();
    let isEmailVaid = validator.isEmail(email);
    if (password !== confirmPassword && isIdValid && isEmailVaid) {
      console.log("Confrim passord salah");
      Swal.fire({
        icon: "warning",
        text: "Retype password wrong!",
      });
    } else if (password == confirmPassword) {
      await send({
        email: email,
        username: username,
        domicile: domicile,
        password: password,
        birthDate: birthDate,
        fullname: fullname,
        indentityNumber: identityNumber,
        instansi: instance,
        educational: educational,
        gender: gender,
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
            text: "proses registrasi gagal!",
          });
        });
    }
  }

  return (
    <>
      <div className="register">
        <Navbar />
        <div className="left-form">
          <form className="form-register">
            <h1 className="header-text">Register</h1>
            <label htmlFor="text" className="label-register">
              Username
            </label>
            {username.length > 20 ? (
              <p
                style={{ color: "red", fontSize: "small", marginLeft: "10px" }}
              >
                {username ? "masimal karakter 20" : null}
              </p>
            ) : null}
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

            {validator.isEmail(email) ? null : (
              <p
                style={{ color: "red", fontSize: "small", marginLeft: "10px" }}
              >
                {email ? "email tidak valid" : null}
              </p>
            )}
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
            {domicile.length > 20 ? (
              <p
                style={{ color: "red", fontSize: "small", marginLeft: "10px" }}
              >
                {domicile ? "masimal karakter 20" : null}
              </p>
            ) : null}
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
              <option value="male" style={{ color: "black" }} selected>
                select your gender
              </option>
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
              {fullname.length > 30 ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "small",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  {fullname ? "masimal karakter 30" : null}
                </p>
              ) : null}
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
              {identityNumber.length != 16 ? (
                <p
                  style={{
                    color: "gainsbro",
                    fontSize: "small",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  {identityNumber ? "data tidak valid" : null}
                </p>
              ) : null}
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
            {instance.length > 30 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "small",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                {instance ? "masimal karakter 30" : null}
              </p>
            ) : null}
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
            {educational.length > 30 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "small",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                {educational ? "masimal karakter 30" : null}
              </p>
            ) : null}
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
            {password.length < 6 ? (
              <p
                style={{
                  color: "red",
                  fontSize: "small",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                {password ? "password minimal karakter 6" : null}
              </p>
            ) : null}
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
            {confirmPassword !== password ? (
              <p
                style={{
                  color: "red",
                  fontSize: "small",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                {confirmPassword ? "konfirmasi password salah" : null}
              </p>
            ) : null}
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
