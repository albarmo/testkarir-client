import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import Navbar from "../components/navbar";
import "./style/submision.css";
import Swal from "sweetalert2";
import ExcelReader from "../helpers/exelHandler/exelReader";
import data from "../helpers/exelHandler/exelReader";

const TestSubmision = () => {
  const { user } = qoreContext.useCurrentUser();
  const history = useHistory();
  const [contributor, setcontributor] = useState("");
  const [message, setMessage] = useState("");
  const [test, setTest] = useState("");
  const [date, setDate] = useState("");
  const ChildElement = React.createRef();
  const [contributorId, setContributorId] = useState("");
  const [newSubmision, setNewSubmision] = useState("");

  const { data: allTest, revalidate } = qoreContext.view("allTest").useListRow({
    order: "asc",
  });

  useEffect(() => {
    console.log(data, "from child state");
  }, [data]);

  const { insertRow, status, error } = qoreContext
    .view("allSubmission")
    .useInsertRow();
  console.log(status, "<< status insert new submision");

  async function addSubmision() {
    let newData = await insertRow({
      contributor: [user.data.id],
      message: message,
      test: test,
      date: date,
    });
    if (newData) {
      setNewSubmision(newData);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Success Add Submision",
        showConfirmButton: false,
        timer: 3000,
      });
    }
    if (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Data",
      });
    }
  }

  useEffect(() => {
    if (!user) {
      setcontributor("loading");
    } else if (user) {
      setcontributor(user.data.email);
      setContributorId(user.data.id);
    }
  });

  return (
    <>
      <div className="submision">
        <Navbar />
        <div className="submision-container">
          <div className="submision-form">
            {status !== "success" ? (
              <>
                <div>
                  <h1>Pengajuan Tes</h1>
                  <p>Harap isi data dengan baik dan valid</p>
                </div>

                <label>
                  <h5>Kontributor</h5>
                </label>
                <input
                  type="text"
                  onChange={(e) => setDate(e.target.value)}
                  value={contributor}
                  required
                  disabled
                />

                <label>
                  <h5>Test</h5>
                </label>
                <select onChange={(e) => setTest(e.target.value)} required>
                  <option>none</option>
                  {allTest
                    ? allTest.map((test, id) => {
                        return (
                          <>
                            <option key={id} value={test.id}>
                              {test.name}
                            </option>
                          </>
                        );
                      })
                    : "loading"}
                </select>

                <label>
                  <h5>Tanggal Test</h5>
                </label>
                <input
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  required
                />

                <label style={{ display: "flex", flexDirection: "row" }}>
                  <h5>Tambahkan Pesan Khusus</h5>
                  <p className="submision-tips" style={{ fontSize: "small" }}>
                    *opsional
                  </p>
                </label>
                <textarea
                  className="submision-textarea"
                  type="textarea"
                  name="message"
                  placeholder="masukan pesan anda disini jika anda memiliki deskripsi kusus"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </>
            ) : null}

            {status === "success" ? (
              <>
                <label>
                  <h5>Upload Data Peserta</h5>
                </label>
                <ExcelReader
                  contributor={contributorId}
                  submision={newSubmision}
                />
                <p className="submision-tips">
                  *pastikan data yang anda masukan sudah valid, untuk template
                  upload data peserta dapat di
                  <a
                    href="../materials/TemplatePeserta.xlsx"
                    download
                    style={{ textDecoration: "none" }}
                  >
                    <b style={{ cursor: "pointer", marginLeft: "2px" }}>
                      download disini
                    </b>
                  </a>
                </p>
              </>
            ) : null}

            {status !== "success" ? (
              <button
                className="button-submision"
                onClick={() => addSubmision()}
              >
                Kirim Pengajuan
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
// history.push("/report", { submision: newData });

export default TestSubmision;
