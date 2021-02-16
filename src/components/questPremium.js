import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import { BiAtom } from "react-icons/bi";
import { getResult } from "../helpers/getResult";
import "./style/questRanking.css";
import ItemTest from "../components/itemTest";

var sectionAnswer = [];
var colIdArr = [];

var initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Learn React JS" },
    "task-2": { id: "task-2", content: "Learn Vue JS" },
    "task-3": { id: "task-3", content: "Learn Angular JS" },
    "task-4": { id: "task-4", content: "Learn Svelte JS" },
  },
  cards: {
    "card-1": {
      id: "card-1",
      title: "todo",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
      color: "#FFBA08",
    },
    "card-2": {
      id: "card-2",
      title: "doing",
      taskIds: [],
      color: "#17C9FF",
    },
    "card-3": {
      id: "card-3",
      title: "completed",
      taskIds: [],
      color: "#14E668",
    },
  },
  cardOrder: ["card-1", "card-2", "card-3"],
};

const QuestPremium = (props) => {
  const history = useHistory();
  const [state, setState] = useState(initialData);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [mainAnswer, setMainAnswer] = useState([]);
  const [clicked, setClicked] = useState([]);

  const Title = styled.h1`
    color: #7b7b7b;
    font-family: sans-serif;
    font-size: 30px;
    text-align: center;
    padding-top: 25px;
  `;

  const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 25px;
  `;

  var dataQuest = [
    {
      id: 0,
      question:
        "Disetiap nomor item, terdapat empat pilihan pekerjaan A, B, C dan D. Tugas anda adalah mengurutkan pilihan pekerjaan tersebut, mulai dari pekerjaan yang paling anda sukai sampai pekerjaan yang paling tidak anda sukai. Berilah rangking dari 1 sampai 4 pada masing-masing pekerjaan dengan cara menuliskan angka 1 = pekerjaan yang paling disukai, 2 = pekerjaan yang cukup disukai, 3 = pekerjaan yang kurang disukai, dan 4 = pekerjaan yang paling tidak disukai. Tulislah jawaban anda pada lembar jawaban yang disediakan.",
      answer: [{ id: 0, data: "Ya saya mengerti", active: false }],
    },
    {
      id: 1,
      question: "BAGIAN 1 - KONVENSIONAL",
      answer: [
        { id: 1, data: "Sales Executive" },
        { id: 1, data: "Pejabat keuangan" },
        { id: 1, data: "Pembuat kebijakan SDM" },
        {
          id: 1,
          data: "Manajer operasional",
        },
      ],
    },
    {
      id: 2,
      question: "BAGIAN 2 - SOSIAL",
      answer: [
        { id: 2, data: "Rohaniawan / Agamawan" },
        { id: 2, data: "Berusaha Ramah meskipun merasa kurang nyaman" },
        { id: 2, data: "Konselor" },
        { id: 2, data: "Ayah / Ibu rumah tangga yang baik" },
        { id: 2, data: "Perawat" },
        { id: 2, data: "Olahraga bersama teman" },
        { id: 2, data: "Anggota Club / Organisasi" },
        { id: 2, data: "Bersosialisasi dengan berbagai orang" },
        {
          id: 2,
          data: "Bijaksana dalam kritik agar tidak menyakiti hati orang lain",
        },
        { id: 2, data: "Menolong dan berbagi pengalaman dengan banyak orang" },
        { id: 2, data: "Guru" },
        { id: 2, data: "Menikmati situasi kerjasama" },
      ],
    },
    {
      id: 3,
      question: "BAGIAN 3 - INVESTIGATIF",
      answer: [
        { id: 3, data: "Programer Komputer" },
        { id: 3, data: "Asisten Peneliti Laboratorium" },
        { id: 3, data: "Penerjemah Buku" },
        { id: 3, data: "Profesor / Peneliti" },
        { id: 3, data: "Dokter" },
        { id: 3, data: "Catur , Game Strategi" },
        {
          id: 3,
          data: "Menganalisa / Belajar per kembangan pengetahuan atau seni",
        },
        { id: 3, data: "Memahami Informasi dengan Benar dan Tepat" },
        { id: 3, data: "Meng hargai diskusi berbagai topik (bukan gosip)" },
        { id: 3, data: "Berpikir matang sebelum me mutuskan meski waktu lama" },
        { id: 3, data: "Membaca Buku / Jurnal Ilmiah" },
        { id: 3, data: "Tidak mudah menerima pendapat / pandangan baru" },
      ],
    },
    {
      id: 4,
      question: "BAGIAN 4 - ARTISTIK",
      answer: [
        {
          id: 4,
          data:
            "Mengagumi Orisinalitas / Keaslian diri seseorang (fisik / mental)",
        },
        { id: 4, data: "Aktor / Aktris" },
        { id: 4, data: "Perancang Seni / Busana, Kerajinan" },
        { id: 4, data: "Musikus" },
        { id: 4, data: "Menari" },
        { id: 4, data: "Fotografi" },
        { id: 4, data: "Arsitek" },
        { id: 4, data: "Mudah meng ekspresikan perasaan secara spontan" },
        {
          id: 4,
          data: "Sering melakukan aktivitas yang mengejutkan / tak terduga",
        },
        {
          id: 4,
          data: "Tertarik pada hal baru tanpa meng hiraukan asal muasalnya",
        },
        { id: 4, data: "Pengarang Buku / Novel" },
        {
          id: 4,
          data:
            "Lebih menyukai kesan menyeluruh dibanding detail-detail konkrit",
        },
      ],
    },
    {
      id: 5,
      question: "BAGIAN 5 - REALISTIK",
      answer: [
        { id: 5, data: "Menikmati aktivitas manual / fisik" },
        { id: 5, data: "Ahli Perkayuan / Furnitur" },
        { id: 5, data: "Ahli pertanian / perkebunan" },
        {
          id: 5,
          data: "Tidak mudah mengobral janji kecuali yakin dapat me nepatinya",
        },
        { id: 5, data: "Ahli Optik / Kacamata/ Lensa" },
        { id: 5, data: "Suka memperbaiki mesin / elektronik / rumah sendiri" },
        { id: 5, data: "Berlayar / bersampan seorang diri" },
        {
          id: 5,
          data:
            "Lebih suka bergaul dengan sedikit orang yang benar-benar dipercaya",
        },
        {
          id: 5,
          data:
            "Berpegang teguh pada pendirian bagai manapun pendapat orang lain",
        },
        { id: 5, data: "Koki" },
        { id: 5, data: "Insinyur Teknik mesin / bangunan" },
        { id: 5, data: "Terkadang saya tampak acuh meski kenyataanya tidak" },
      ],
    },
    {
      id: 6,
      question: "BAGIAN 6 - ENTREPRISING",
      answer: [
        { id: 6, data: "Ahli hukum" },
        { id: 6, data: "Ber penampilan keren / modis" },
        { id: 6, data: "Manajer / eksekutif (pengelola bisnis)" },
        { id: 6, data: "Politisi" },
        { id: 6, data: "Bersemangat dalam melakukan suatu aktivitas" },
        { id: 6, data: "Suka permainan gambling / beresiko" },
        { id: 6, data: "Berwisata" },
        { id: 6, data: "Agensi perjalanan dan wisata" },
        { id: 6, data: "Senang menjadi pusat perhatian" },
        {
          id: 6,
          data:
            "Menyukai aktivitas yang beresiko (contoh : arung jeram, outbound ,dll)",
        },
        { id: 6, data: "Menikmati situasi kompetitif" },
        { id: 6, data: "Bagian Pemasaran" },
      ],
    },
  ];
  var icon = [
    "RiAncientPavilionLine",
    "RiHomeLine",
    "RiSendPlaneLine",
    "FaEthereum",
    "FaDribbbleSquare",
    "FaBalanceScaleLeft",
    "FaBullhorn",
    "FaCashRegister",
    "FaCity",
  ];
  var dataAnswer = dataQuest[indexQuestion].answer;

  // ------------------------------------FUNCTION GENERATE QUESTION----------------------------------------------------//
  // component did mount set refresh indexQuestion
  useEffect(() => {
    setIndexQuestion(0);
    sectionAnswer = [];
  }, []);

  useEffect(() => {
    colIdArr = [];
  }, [indexQuestion]);

  function generateIcon(icon) {
    var iconGen = Math.floor(Math.random() * icon.length - 1);
  }

  function nextQuest(e) {
    e.preventDefault();
    if (indexQuestion + 1 != dataQuest.length) {
      setIndexQuestion(indexQuestion + 1);
      colIdArr = [];
      generateIcon(icon);
    } else {
      console.log("Selesai pertanyaan habis");
      console.log(mainAnswer, "FINAL");
      let dataX = getResult(sectionAnswer);
      console.log(dataX);
      history.push({
        pathname: "/result",
        state: { user: props.user, output: dataX },
      });
    }
  }
  // --------------------------------------------FUNCTION PENILAIAN-----------------------------------------------------------------//

  function boxStatus(colId) {
    // htmlFor (let i = 0; i < dataQuest[indexQuestion].answer.length; i++) {
    if (colIdArr.includes(colId) == true) {
      // console.log("udah ke click", colIdArr.includes(colId));
      // console.log("Ada di index ke-", colIdArr.indexOf(colId));
      let index = colIdArr.indexOf(colId);
      if (index > -1) {
        colIdArr.splice(index, 1);
      }
      console.log(colIdArr);
      // colIdArr = newArr
    } else if (colIdArr.includes(colId) == false) {
      colIdArr.push(colId);
      console.log(colIdArr, "array col id");
    }
    // }
  }

  function userAction(idAnswer, colId) {
    // console.log(idAnswer, "pushed to answerData");
    sectionAnswer.push(idAnswer);
    setMainAnswer(sectionAnswer);
    setClicked(colId);
    boxStatus(colId);
    // console.log(colIdArr, ">>> col Array");
  }

  return (
    <>
      <div className="question">
        {dataQuest
          ? dataQuest.map((el) => {
              <>
                User Answer data : {mainAnswer}
                <h1>Halo{el.question}</h1>;
              </>;
            })
          : null}
        <h5 style={{ color: "#BDBDBD" }}>
          Pertanyaan {indexQuestion + 1} - {dataQuest.length}
        </h5>
        <h2>Instruksi</h2>
        <p>{dataQuest[indexQuestion].question}</p>
      </div>
      <div class="grid-container">
        {/* draganddrop */}
        <div>
          <Title>Drag & Drop React JS</Title>
          <CardContainer>
            {state.cardOrder.map((cardId, index) => {
              const card = state.cards[cardId];
              const tasks = card.taskIds.map((taskId) => state.tasks[taskId]);
              return (
                <Card key={cardId} card={card} tasks={tasks} index={index} />
              );
            })}
          </CardContainer>
        </div>
        {/* draganddrop */}

        {dataAnswer.map((el, colId) => {
          return (
            <div key={colId}>
              {el.id == 0 ? null : (
                <div
                  className={`col ${
                    colIdArr.includes(colId) ? `active ${colId}` : "inactive"
                  }`}
                  id={colId}
                  onClick={() => userAction(`${el.id}`, colId)}
                >
                  <>
                    {colId}
                    <BiAtom />
                    <p>{el.data}</p>
                  </>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="button-test" onClick={(e) => nextQuest(e)}>
        {indexQuestion >= dataQuest.length ? "Lihat Hasil" : "Lanjut"}
      </div>
    </>
  );
};

export default QuestPremium;
