import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import qoreContext from "../qoreContext";
import Navbar from "../components/navbar";
import "./style/hasilTes.css";
import { jsPDF } from "jspdf";

const doc = new jsPDF();

const TestResult = (props) => {
  console.log(props.location.state.user.data.username);
  const location = useLocation();
  const history = useHistory();

  const timeElapsed = Date.now();
  var today = new Date(timeElapsed);

  // PDF -------------------------------------------------------------------
  doc.setFont("times", "bold");
  doc.setFontSize(22);
  // doc.text(`${location.state.output.title}`, 24, 24);
  doc.setFontSize(12);
  // doc.text(`${location.state.output.description}`, 30, 40);

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
        <div className="question-container-result">
          <div className="question-result">
            <h5 style={{ color: "#BDBDBD" }}>
              {location.state.user.username ? (
                <p>Nama : {props.location.state.user.username}</p>
              ) : null}
              {props.location.state.user ? (
                <>
                  <p style={{ fontWeight: "bolder", fontSize: "2rem" }}>
                    {props.location.state.user.data.username}
                  </p>
                  <p>{props.location.state.user.data.email}</p>
                </>
              ) : null}
            </h5>
            {today.toDateString()}
            <h1>
              {location.state.output
                ? location.state.output.title
                : "Jawaban Kosong"}
              {props.location.state.result ? props.location.state.result : null}
            </h1>
          </div>

          <div className="test-result">
            <p>
              {location.state.output ? location.state.output.description : null}
            </p>
          </div>
          <div className="button-result-container">
            <div className="button-result" onClick={contertPDF}>
              <p>Download Hasil Tes</p>
            </div>
            <div
              className="button-premium"
              onClick={() => history.push("/register")}
            >
              <p>Coba Premium</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestResult;
