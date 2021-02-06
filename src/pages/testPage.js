import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import Navbar from "../components/navbar";

import "./style/testPage.css";

const TestPage = () => {
  const history = useHistory();
  const [indexQuestion, setIndexQuestion] = useState(0);

  const { data: freeQuestion, status, error } = qoreContext.view(
    "freeQuestion"
  );

  var dataQuest = [
    {
      id: 1,
      question: "Pertanyaan nomor satu, ini pertanyaan nomor satu?",
      answer: [
        { id: 1, data: "Ya ini Jawaban Nomor satu" },
        { id: 2, data: "Ya ini Jawaban Nomor dua" },
        { id: 3, data: "Ya ini Jawaban Nomor tiga" },
      ],
    },
    {
      id: 2,
      question: "Pertanyaan nomor satu, ini pertanyaan nomor dua?",
      answer: [
        { id: 1, data: "Ya ini Jawaban Nomor satu" },
        { id: 2, data: "Ya ini Jawaban Nomor dua" },
        { id: 3, data: "Ya ini Jawaban Nomor tiga" },
      ],
    },
    {
      id: 3,
      question: "Pertanyaan nomor satu, ini pertanyaan nomor tiga?",
      answer: [
        { id: 1, data: "Ya ini Jawaban Nomor satu" },
        { id: 2, data: "Ya ini Jawaban Nomor dua" },
        { id: 3, data: "Ya ini Jawaban Nomor tiga" },
      ],
    },
    {
      id: 4,
      question: "Pertanyaan nomor satu, ini pertanyaan nomor empat?",
      answer: [{ id: 1, data: "Ya ini Jawaban Nomor Satu" }],
    },
  ];

  useEffect(() => {
    setIndexQuestion(0);
  }, []);

  useEffect(() => {
    console.log(dataQuest, "<< dummy data question");
  }, [indexQuestion]);

  var dataAnswer = dataQuest[indexQuestion].answer;

  function nextQuest() {
    if (indexQuestion + 1 <= dataQuest.length - 1) {
      setIndexQuestion(indexQuestion + 1);
      console.log(
        indexQuestion + 1,
        "<<<< index",
        dataQuest.length,
        "<<< quest length"
      );
    } else {
      console.log("Selesai pertanyaan habis");
      history.push("/result");
    }
  }

  return (
    <>
      <div className="test">
        <Navbar />
        <h1>Question Page</h1>
        <p>ini question page</p>
        <div className="question-container">
          <div className="question">
            {dataQuest
              ? dataQuest.map((el) => {
                  <h1>Halo{el.question}</h1>;
                })
              : null}

            <h5 style={{ color: "#BDBDBD" }}>
              Pertanyaan {indexQuestion + 1} - {dataQuest.length + 1}
            </h5>
            <h1>{dataQuest[indexQuestion].question}</h1>
          </div>
          {dataAnswer.map((el) => {
            return (
              <>
                <div className="answer-form">
                  <input
                    className="answer-form-input"
                    type="checkbox"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label className="answer-form-label" for="vehicle1">
                    {el.data}
                  </label>
                </div>
              </>
            );
          })}
          <div className="button-test" onClick={() => nextQuest()}>
            {indexQuestion >= dataQuest.length ? "Lihat Hasil" : "Lanjut"}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestPage;
