import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import Navbar from "../components/navbar";
import "./style/hasilTes.css";
import { jsPDF } from "jspdf";

const doc = new jsPDF();

doc.setFont("times", "italic");
doc.text("Teskarir anda cocok jadi presiden zimbabwe!", 24, 24);
doc.text("Teskarir anda cocok jadi presiden zimbabwe!", 30, 30);

function contertPDF() {
  let nameDummy = "albar";
  console.log("<<<<< jsPDF >>>>");
  doc.save(`Hasil test ${nameDummy} - Teskarir.pdf`);
}

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
          {/* <Link to="" target="blank" download> */}
          <div className="button-result" onClick={contertPDF}>
            <p>Download Hasil Tes</p>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default TestResult;
