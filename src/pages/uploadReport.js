import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import "./style/report.css";
import Navbar from "../components/navbar";

import Pdf from "react-to-pdf";
const ref = React.createRef();

const UploadReport = (props) => {
  const history = useHistory();
  const [data, setData] = useState("");
  const [submision, setSumbision] = useState("");
  const { data: allParticipants, status } = qoreContext
    .view("allParticipants")
    .useListRow({
      order: "asc",
    });

  if (props.location.state.submision.contributor) {
    var filteredByContributors = allParticipants.filter(
      (val, id) =>
        val.contributiorId === props.location.state.submision.contributor
    );
  } else {
    console.log("loading props");
  }

  console.log(props.location.state.data);
  useEffect(() => {
    if (!props.location.state.data) {
      setTimeout(function () {
        console.log("loading data");
      }, 500);
    } else if (props.location.state.data) {
      setSumbision(props.location.state.submision);
      setData(props.location.state.data);
      console.log("success recived data");
    }
  }, []);

  return (
    <>
      <div className="report">
        <Navbar />
        <h1 style={{ width: "40%", color: "#0E7B9B" }}>
          Terimakasih telah mengajukan test di Teskarir.com,berikut report
          pengajuan kamu
        </h1>
        <p style={{ width: "40%", color: "#0E7B9B" }}>
          Tim kami akan segera menghubungi anda
        </p>
        <div
          ref={ref}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="container-report" ref={ref}>
            <div className="lembar">
              <h1>Lembar Pengajuan Test</h1>
              <p>ID Pengajuan : {submision.id}</p>
              {submision.test ? (
                <h3>Test : {submision.test.displayField}</h3>
              ) : null}
              {submision.contributor ? (
                <h3>Kontributor : {submision.contributor.displayField}</h3>
              ) : null}
              <p>Tanggal Tes : {submision.date}</p>
            </div>
            <div className="report-table">
              <h3>Account Peserta Test</h3>
              <table>
                <tr>
                  <th>No</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
                {data
                  ? data.map((val, id) => {
                      return (
                        <tr key={id}>
                          <td>{id + 1}</td>
                          <td>{val.email}</td>
                          <td>Password123</td>
                        </tr>
                      );
                    })
                  : "loading"}
              </table>
            </div>
          </div>
        </div>

        <Pdf targetRef={ref} filename={`report pengajuan teskarir .pdf`}>
          {({ toPdf }) => (
            <button className="button-result" onClick={toPdf}>
              Download PDF
            </button>
          )}
        </Pdf>
      </div>
    </>
  );
};

export default UploadReport;
