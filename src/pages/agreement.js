import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import client from "../qoreContext";
import "./style/agreement.css";
import Navbar from "../components/navbar";
import Swal from "sweetalert2";
import Footer from "../components/footer";
const Agreement = (props) => {
  const { user } = qoreContext.useCurrentUser();
  const history = useHistory();
  const [numberVerify, setNumberVerify] = useState("");
  const [userId, setUserId] = useState("");
  const [isVerify, updateVerifyStatus] = useState(true);

  const ID = localStorage.getItem("user_id");

  const { updateRow, status } = qoreContext.view("allMember").useUpdateRow();
  console.log(status, "status update data numberVerify");

  useEffect(() => {
    setUserId(ID);
  }, [userId]);

  useEffect(() => {
    if (!user) {
      console.log("loading userdata");
    } else if (user) {
      if (user.data.numberVerify !== "unverivfy") {
        updateVerifyStatus(false);
      }
    }
  }, [user]);

  console.log(user);

  let userIdentifyKey = user ? user.data.indentityNumber : "loading";
  console.log(userIdentifyKey);

  async function submitVerify() {
    if (numberVerify === userIdentifyKey) {
      console.log({
        status: {
          status: "success",
          message: "id approved",
        },
      });
      history.push(`/teskarir/${props.location.state.testId}`);
    } else if (numberVerify != userIdentifyKey) {
      console.error({
        status: {
          status: "rejected",
          message: "input identity number invalid",
        },
      });
    }
  }

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
          key : {userIdentifyKey ? userIdentifyKey : "loading"}
          <div className="form-agreement">
            <h2>Verify Yourself</h2>
            <div className="text-agreement">
              <label htmlFor="nik"> Input Nomor Identitas Anda</label>
              {numberVerify !== userIdentifyKey &&
              numberVerify.length === 16 ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "small",
                    marginLeft: "10px",
                  }}
                >
                  {/* <h5>{numberVerify ? "invalid id" : null}</h5> */}
                </p>
              ) : null}
              <input
                className="input-text-agreement"
                placeholder="--- --- ------ ----"
                type="number"
                onChange={(e) => setNumberVerify(e.target.value)}
                maxLength="16"
                required
              />
              <div className="button-start" onClick={() => submitVerify()}>
                Mulai Test
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Agreement;
