import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import client from "../qoreContext";
import "./style/agreement.css";
import Navbar from "../components/navbar";

const Agreement = () => {
  const history = useHistory();

  const [numberVerify, setNumberVerify] = useState("");
  const [fileUpload, setFileUpload] = useState("");

  const [userId, setUserId] = useState("775b7037-1991-4541-b906-a361addfcfd9");
  const [verifyMethod, setVerivyMethod] = useState(true);

  //   const { updateRow, status } = qoreContext.view("allMember").useUpdateRow();
  //   const handleUpload = async (e) => {
  //     const file = e.currentTarget.files?.item(0);
  //     if (!file) return;
  //     const url = await client.view("allMember").upload(file);
  //     await updateRow(userId, { cardVerify: url });
  //   };

  const ID = localStorage.getItem("user_id");
  useEffect(() => {
    setUserId(ID);
  }, [userId]);

  const { updateRow, status } = qoreContext.view("allMember").useUpdateRow();
  console.log(status, "status update data numberVerify");

  async function inputNumberVerify() {
    await updateRow(userId, { numberVerify: numberVerify });
    setVerivyMethod(false);
  }

  let valid = { backround: "green" };

  return (
    <>
      <div className="agreement">
        <Navbar />
        <div className="container-agreement">
          <h1>Agreement</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="form-agreement">
            <h2>Verify Yourself</h2>
            <div
              className="change-method"
              onClick={() => setVerivyMethod(!verifyMethod)}
              style={{ cursor: "pointer", backround: "blue" }}
            >
              {verifyMethod ? "Input Nomor Identitas" : "Upload Kartu Pelajar"}
            </div>
            {verifyMethod ? (
              <div className="text-agreement">
                NV: {numberVerify}
                <label htmlFor="nik">Input Nik</label>
                <input
                  className="input-text-agreement"
                  placeholder="317 409 170398 0xxx"
                  type="text"
                  onChange={(e) => setNumberVerify(e.target.value)}
                />
                <div className="button-nik" onClick={() => inputNumberVerify()}>
                  Sumbit
                </div>
              </div>
            ) : (
              <div className="upload-agreement">
                <label htmlFor="nik">Upload Image</label>
                <input type="file" onChange={(e) => setFileUpload(e)} />
                <p style={{ fontSize: "10px" }}>* optional</p>
              </div>
            )}
          </div>
          <div className="captcha-agreement">
            <label htmlFor="nik">Captcha Verify</label>
            <div className="captcha">ON PROGRESS</div>
            <div
              className="button-start"
              onClick={() => history.push("/testkarir")}
            >
              Mulai
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agreement;
