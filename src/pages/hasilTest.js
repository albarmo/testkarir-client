import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import Navbar from "../components/navbar";

import "./style/hasilTes.css";

const TestResult = () => {
  const history = useHistory();
  const [indexQuestion, setIndexQuestion] = useState(0);

  const { data: freeQuestion, status, error } = qoreContext.view(
    "freeQuestion"
  );
  return (
    <>
      <div className="result">
        <Navbar />
        <div className="question-container-result">
          <div className="question-result">
            <h5 style={{ color: "#BDBDBD" }}>
              TEST ID : asdnasid-asdas-asde23
            </h5>
            {Date.now()}
            <h1>Hasil</h1>
          </div>

          <div className="test-result">
            <p>
              Hai Kawan Karir Terima kasih banyak sudah melakukan tes minat di
              teskarir, berikut hasilnya Jika ada yang ingin ditanyakan lebih
              lanjut ataupun konsultasi, jangan ragu untuk kontak kami. Terima
              kasih
            </p>
          </div>

          <div className="button-result">Download Hasil Tes</div>
        </div>
      </div>
    </>
  );
};

export default TestResult;
