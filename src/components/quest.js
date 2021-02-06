import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import "./style/quest.css";

const Quest = () => {
  const history = useHistory();
  const [indexQuestion, setIndexQuestion] = useState(0);

  const { data: freeQuestion, status, error } = qoreContext.view(
    "freeQuestion"
  );

  var dataQuest = [
    {
      id: 0,
      question:
        "Pilihlah pernyataan-pernyataan yang paling sesuai dan menggambarkan diri anda. Pada setiap bagian, anda bebas memilih berapapun pernyataan tentang diri anda!",
      answer: [{ data: "Ya saya mengerti" }],
    },
    {
      id: 1,
      question: "BAGIAN 1 - KONVENSIONAL",
      answer: [
        { id: 1, data: "Ya ini Jawaban Nomor satu" },
        { id: 2, data: "Ya ini Jawaban Nomor dua" },
        { id: 3, data: "Ya ini Jawaban Nomor tiga" },
      ],
    },
    {
      id: 1,
      question: "BAGIAN 2 - SOSIAL",
      answer: [
        { id: 1, data: "Ya ini Jawaban Nomor satu" },
        { id: 2, data: "Ya ini Jawaban Nomor dua" },
        { id: 3, data: "Ya ini Jawaban Nomor tiga" },
      ],
    },
    {
      id: 2,
      question: "BAGIAN 3 - INVESTIGATIF",
      answer: [
        { id: 1, data: "Ya ini Jawaban Nomor satu" },
        { id: 2, data: "Ya ini Jawaban Nomor dua" },
        { id: 3, data: "Ya ini Jawaban Nomor tiga" },
      ],
    },
    {
      id: 3,
      question: "BAGIAN 4 - ARTISTIK",
      answer: [
        { id: 1, data: "Ya ini Jawaban Nomor satu" },
        { id: 2, data: "Ya ini Jawaban Nomor dua" },
        { id: 3, data: "Ya ini Jawaban Nomor tiga" },
        { id: 3, data: "Ya ini Jawaban Nomor tiga" },
      ],
    },
    {
      id: 4,
      question: "BAGIAN 5 - REALISTIK",
      answer: [{ id: 1, data: "Ya ini Jawaban Nomor Satu" }],
    },
    {
      id: 5,
      question: "BAGIAN 6 - ENTREPRISING",
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
    if (indexQuestion + 1 != dataQuest.length) {
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
      <div className="question">
        {dataQuest
          ? dataQuest.map((el) => {
              <h1>Halo{el.question}</h1>;
            })
          : null}
        <h5 style={{ color: "#BDBDBD" }}>
          Pertanyaan {indexQuestion + 1} - {dataQuest.length}
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
    </>
  );
};

export default Quest;
