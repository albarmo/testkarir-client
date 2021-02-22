import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import qoreContext from "../qoreContext";
import Navbar from "../components/navbar";
import "./style/hasilTes.css";
import { jsPDF } from "jspdf";
import GenerateHistory from "../helpers/generateHistory";
import imgData from "../materials/login.png";

import Pdf from "react-to-pdf";
const ref = React.createRef();

const doc = new jsPDF();

const TestResult = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [data, setData] = useState();
  const [outputId, setOutputId] = useState("");

  const { data: allOutputTest, revalidate } = qoreContext
    .view("allOutputTest")
    .useListRow(
      {
        order: "asc",
      },
      { networkPolicy: "network-and-cache" }
    );

  useEffect(() => {
    if (allOutputTest) {
      let result = props.location.state.result;
      let filterOutput = allOutputTest.filter((val, id) => val.res == result);
      setData(filterOutput[0]);
    } else {
      console.log("loading");
    }
  }, [allOutputTest]);

  const { data: outputDetail } = qoreContext
    .view("allOutputs")
    .useGetRow(outputId);

  const { send, status } = qoreContext
    .view("allHistoryTest")
    .useForm("createHistory");
  console.log(`create new history status : ${status}`);

  useEffect(() => {
    if (props.location.state.user && outputDetail && data) {
      let user = props.location.state.user;
      GenerateHistory(user, data, outputDetail, send);
    } else {
      console.log("loading parameters");
    }
  }, [data, outputDetail]);

  useEffect(() => {
    if (data) {
      setOutputId(data.outputId.id);
    } else {
      console.log("loading data");
    }
  }, [data]);

  const timeElapsed = Date.now();
  var today = new Date(timeElapsed);

  // PDF -------------------------------------------------------------------
  doc.setFont("times", "bold");
  doc.setFontSize(22);
  doc.text(`Hii, ${props.location.state.user.data.username} `, 24, 24);
  doc.setFontSize(12);
  doc.setFont("times", "normal");
  doc.text(
    `Terima kasih banyak sudah melakukan tes minat di teskarir, berikut hasilnya :), `,
    24,
    34
  );
  doc.addImage(imgData, "JPEG", 40, 40, 50, 50);
  doc.setFontSize(11);
  doc.setFont("times", "normal");

  // PDF -------------------------------------------------------------------

  function contertPDF() {
    console.log("<<<<< jsPDF >>>>");
    doc.save(
      `Hasil test ${
        props.location.state.user.username
          ? props.location.state.user.username
          : props.location.state.user.data.username
      } - Teskarir.pdf`
    );
  }

  return (
    <>
      <div className="result">
        <Navbar />

        <div className="question-container-result" ref={ref}>
          <div className="question-result">
            <h3
              style={{ background: "#117ea0", padding: "5%", color: "white" }}
            >
              {location.state.user.username ? (
                <p>Nama : {props.location.state.user.username}</p>
              ) : null}
              {props.location.state.user ? (
                <>
                  <p style={{ fontWeight: "bolder", fontSize: "2rem" }}>
                    Hii, {props.location.state.user.data.username}
                  </p>
                  <p style={{ width: "50%" }}>
                    Terima kasih banyak sudah melakukan tes minat di teskarir,
                    berikut hasilnya,
                  </p>
                  <p>{props.location.state.user.data.email}</p>
                </>
              ) : null}
            </h3>
            <div style={{ padding: "1%" }}>
              <p style={{ color: "GrayText" }}>{today.toDateString()}</p>
              <p>
                Hasil tes kamu adalah....
                {location.state.output ? location.state.output.title : null}
              </p>
              <h1>{data ? data.outputId.displayField : "loading"}</h1>
              {data ? data.testId.displayField : "loading"}
              <div className="text-result">
                <p>
                  Terima kasih banyak sudah melakukan tes minat di teskarir,
                  berikut hasilnya, Terima kasih banyak sudah melakukan tes
                  minat di teskarir, berikut hasilnya, Terima kasih banyak sudah
                  melakukan tes minat di teskarir, berikut hasilnya, Terima
                  kasih banyak sudah melakukan tes minat di teskarir, berikut
                  hasilnya, Terima kasih banyak sudah melakukan tes minat di
                  teskarir, berikut hasilnya, Terima kasih banyak sudah
                  {outputDetail ? outputDetail.description : "loading"}
                </p>
              </div>
              <div className="button-result-container"></div>
            </div>
          </div>
        </div>
        <div className="button-result-container">
          <Pdf
            targetRef={ref}
            filename={`hasil test ${
              props.location.state.user.username
                ? props.location.state.user.username
                : props.location.state.user.data.username
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

export default TestResult;
