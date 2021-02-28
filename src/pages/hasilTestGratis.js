import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import qoreContext from "../qoreContext";
import Navbar from "../components/navbar";
import "./style/hasilTes.css";
import { jsPDF } from "jspdf";
import GenerateHistory from "../helpers/generateHistory";

import Pdf from "react-to-pdf";
const ref = React.createRef();

const doc = new jsPDF();

const FreeTestResult = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [data, setData] = useState();
  const [outputId, setOutputId] = useState("");

  const timeElapsed = Date.now();
  var today = new Date(timeElapsed);

  let user = props.location.state.user
    ? props.location.state.user
    : "data is not valid";
  let output = props.location.state.output
    ? props.location.state.output
    : "Jawaban Invalid";

  const { data: allOutput, revalidate } = qoreContext
    .view("allOutputs")
    .useListRow(
      {
        order: "asc",
      },
      { networkPolicy: "network-and-cache" }
    );

  let fetchOutput = allOutput
    ? allOutput.filter((val) => val.name.toUpperCase() === output.toUpperCase())
    : "failed fetching output";

  console.log(fetchOutput);

  let resultId = fetchOutput[0] ? fetchOutput[0].id : null;
  console.log(resultId, "result id");

  const { send, status } = qoreContext
    .view("allHistoryTest")
    .useForm("createHistory");
  console.log(`create new history status : ${status}`);

  const testId = props.location.state.test[0].testId.id;
  const typeId = "c587e204-d1b4-4fff-bbd0-df84fd4004de";

  let userId = "";
  if (props.location.state.userData === null) {
    userId = props.location.state
      ? props.location.user.data.id
      : props.location.state.userdata.data.id;
  } else if (props.location.state.userData === null) {
    userId = props.location.state
      ? props.location.state.userdata.data.id
      : props.location.user.data.id;
  }

  console.log(props.location.state);

  const generateHistory = () => {
    setTimeout(() => {
      console.log("waiting props data!");
    }, 5000);
    let createNewHistory = send({
      // type: ["496a27a8-ee80-46a2-aff3-88923fa8382c"],
      userId: [userId],
      date: new Date(),
      testId: [testId],
      // result: [resultId],
    });
    console.log(createNewHistory);
  };

  useEffect(() => {
    setTimeout(generateHistory, 3000);
    console.log(fetchOutput, "<< output");
    console.log(user, "<< output");
  }, []);

  useEffect(() => {
    if (data) {
      setOutputId(data.outputId.id);
    } else {
      console.log("loading data");
    }
  }, [data]);

  return (
    <>
      <div className="result">
        <Navbar />

        <div className="question-container-result" ref={ref}>
          <div className="question-result">
            <h3
              style={{ background: "#117ea0", padding: "5%", color: "white" }}
            >
              <p
                style={{
                  color: "gainsbro",
                  fontWeight: "normal",
                  fontSize: "small",
                }}
              >
                {today.toDateString()}
              </p>
              <>
                <p style={{ fontWeight: "bolder", fontSize: "2rem" }}>
                  Hii, {user.fullname}
                </p>
                <p style={{ width: "50%" }}>
                  Terima kasih banyak sudah melakukan tes minat di teskarir,
                  berikut hasilnya,
                </p>
              </>
            </h3>
            <div style={{ padding: "1%" }}>
              <p>Hasil tes kamu adalah....</p>
              <h1>{output}</h1>
              <div className="text-result">
                <p>{fetchOutput[0] ? fetchOutput[0].description : "loading"}</p>
              </div>
              <div className="button-result-container"></div>
            </div>
          </div>
        </div>
        <div className="button-result-container">
          <Pdf
            targetRef={ref}
            filename={`hasil test ${
              user.fullname ? user.fullname : "invalid data"
            }.pdf`}
          >
            {({ toPdf }) => (
              <button className="button-result" onClick={toPdf}>
                Generate Pdf
              </button>
            )}
          </Pdf>
        </div>
      </div>
    </>
  );
};

export default FreeTestResult;
