import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Quest from "../components/quest";

import "./style/testPage.css";

const TestPage = () => {
  const [isValid, setIsValid] = useState(true);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("");

  let dataUser = { username, age, activity };

  useEffect(() => {
    setIsValid(false);
  }, []);

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

                <label className="label-quest" for="nama">
                  <h1>Masukan nama anda</h1>
                </label>
                <input
                  className="input-quest"
                  id="nama"
                  type="text"
                  placeholder="Masukan nama anda"
                  onChange={(e) => setUsername(e.target.value)}
                  maxLength={30}
                  required
                />

                <label className="label-quest" for="umur">
                  <h1>Masukan umur anda</h1>
                </label>
                <input
                  className="input-quest"
                  id="umur"
                  type="number"
                  placeholder="Berapa umur anda sekarang?"
                  onChange={(e) => setAge(e.target.value)}
                  max={99}
                  maxLength={2}
                />

                <label className="label-quest" for="pekerjaan">
                  <h1>Masukan pekerjaan/kegiatan anda saat ini</h1>
                </label>
                <input
                  className="input-quest"
                  id="pekerjaan"
                  type="text"
                  maxLength={50}
                  placeholder="Apa aktifitas anda sekarang?"
                  onChange={(e) => setActivity(e.target.value)}
                />
              </form>
              {!isValid ? (
                <div className="button-quesy" onClick={() => setIsValid(true)}>
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
