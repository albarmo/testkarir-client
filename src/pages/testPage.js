import { set } from "js-cookie";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/navbar";
import Quest from "../components/quest";
import qoreContext from "../qoreContext";

import "./style/testPage.css";

const TestPage = () => {
  const { user } = qoreContext.useCurrentUser();

  const [isValid, setIsValid] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [numberIdentfy, setNumberIdentify] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [domicile, setDomicile] = useState("");
  const [instance, setInstance] = useState("");
  const [education, setEducation] = useState("");
  const [gender, setGender] = useState("");

  let dataUser = {
    fullname,
    email,
    numberIdentfy,
    birthDate,
    domicile,
    instance,
    education,
    gender,
  };

  let userData = user ? user.data : "loading user";
  console.log(userData);

  useEffect(() => {
    console.log(user);
    if (user) {
      setIsValid(true);
    }
  }, [user]);

  useEffect(() => {
    console.log(`checking user isLogin`);
    if (userData) {
      if (user) {
        dataUser = {
          fullname: user.data.username,
          email: user.data.email,
          numberIdentfy: user.data.numberVerify,
          birthDate: user.data.birthDate,
          domicile: user.data.domicile,
          instance: "",
          education: "",
          gender: "",
        };
      }
    }
  }, [userData]);

  const { send, status } = qoreContext
    .view("allFreeMember")
    .useForm("submitData");
  console.log(status, "<< status submit user");

  useEffect(() => {
    if (status === "success") {
      setIsValid(true);
      Swal.fire({
        title:
          "Pilihlah pernyataan-pernyataan yang paling sesuai dan menggambarkan diri anda. Pada setiap bagian, anda bebas memilih berapapun pernyataan tentang diri anda!",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else if (status === "error") {
      Swal.fire("data masih belum lengkap nih");
    }
  }, [status]);

  function startHandler() {
    let newData = send({
      fullname: fullname,
      email: email,
      identityNumber: numberIdentfy,
      birthDate: birthDate,
      domicile: domicile,
      instance: instance,
      educational: education,
      gender: gender,
    });
  }

  return (
    <>
      <div className="test">
        <Navbar />
        <div className="question-container">
          {!isValid ? (
            <div className="quesyHeader">
              <form className="form-questHeader">
                <h1>Sebelum kita mulai, isi data diri anda disini</h1>
                <br />

                <label className="label-quest" htmlFor="nama">
                  <h1>Masukan nama lengkap anda</h1>
                </label>
                <input
                  className="input-quest"
                  id="nama"
                  type="text"
                  placeholder="Masukan nama anda"
                  onChange={(e) => setFullname(e.target.value)}
                  maxLength={30}
                  required
                />

                <label className="label-quest" htmlFor="nama">
                  <h1>Email </h1>
                </label>
                <input
                  className="input-quest"
                  id="nama"
                  type="email"
                  placeholder="Masukan nama anda"
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={30}
                  required
                />

                <label className="label-quest" htmlFor="nama">
                  <h1>Gender</h1>
                </label>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  className="input-quest"
                >
                  <option value="unset" selected>
                    unset
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <label className="label-quest" htmlFor="nama">
                  <h1>NIK</h1>
                </label>
                <input
                  className="input-quest"
                  id="nama"
                  type="number"
                  placeholder="Masukan nomor indentitas anda"
                  onChange={(e) => setNumberIdentify(e.target.value)}
                  maxLength={16}
                  minLength={16}
                  required
                />

                <label className="label-quest" htmlFor="nama">
                  <h1>Tanggal Lahir</h1>
                </label>
                <input
                  className="input-quest"
                  id="nama"
                  type="date"
                  placeholder="Masukan tanggal lahir anda"
                  onChange={(e) => setBirthDate(e.target.value)}
                  maxLength={30}
                  required
                />

                <label className="label-quest" htmlFor="nama">
                  <h1>Domisili</h1>
                </label>
                <input
                  className="input-quest"
                  id="nama"
                  type="text"
                  placeholder="Masukan tempat tinggal anda"
                  onChange={(e) => setDomicile(e.target.value)}
                  maxLength={30}
                  required
                />

                <label className="label-quest" htmlFor="nama">
                  <h1>Instansi / Intuisi</h1>
                </label>
                <input
                  className="input-quest"
                  id="nama"
                  type="text"
                  placeholder="Masukan instansi anda"
                  onChange={(e) => setInstance(e.target.value)}
                  maxLength={30}
                  required
                />

                <label className="label-quest" htmlFor="nama">
                  <h1>Pendidikan Terakhir</h1>
                </label>
                <input
                  className="input-quest"
                  id="nama"
                  type="text"
                  placeholder="Masukan jenjang pendidikan terakhir anda"
                  onChange={(e) => setEducation(e.target.value)}
                  maxLength={30}
                  required
                />
              </form>
              {!isValid ? (
                <div className="button-quesy" onClick={() => startHandler()}>
                  Mulai Tes
                </div>
              ) : null}
            </div>
          ) : null}
          {isValid ? <Quest user={dataUser} /> : null}
        </div>
      </div>
    </>
  );
};

export default TestPage;
