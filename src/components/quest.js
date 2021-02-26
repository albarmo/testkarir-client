import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import "./style/quest.css";
import { BiAtom } from "react-icons/bi";
import Swal from "sweetalert2";
import axios from "axios";

import { getResult } from "../helpers/getResult";

var sectionAnswer = [];
var colIdArr = [];
let datax = [];

const Quest = (props) => {
  const history = useHistory();
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [mainAnswer, setMainAnswer] = useState([]);
  const [clicked, setClicked] = useState([]);

  function getAllStatementGroup() {
    console.log("fetch");
    axios({
      method: "GET",
      url:
        "https://prod-qore-app.qorebase.io/U6NDz2mu562iqwj/allStatementsGroup/fields",
    })
      .then(({ data }) => {
        let { nodes } = data;
        let allStatementsGroup = nodes;
        datax = nodes;
      })
      .catch((error) => {
        console.log(error, "err fetch");
      });
  }

  useEffect(() => {
    getAllStatementGroup();
  }, []);

  // --------------------------------------------QORE SDK-------------------------------------------------------------//
  const { data: allStatementsGroup2, status, error } = qoreContext
    .view("allStatementsGroup")
    .useListRow({ limit: 100 });

  console.log(allStatementsGroup2, "qore");
  console.log(datax);

  // // --------------------------------------------DATA-----------------------------------------------------------------//
  if (allStatementsGroup2) {
    var filterFreeTest = allStatementsGroup2.filter(
      (val) => val.testId.displayField === "FreeTest"
    );
  }

  let questLength = filterFreeTest[0]
    ? filterFreeTest[0].statements.totalCount
    : "none";

  let objectDataTest = filterFreeTest[0];

  let statementId = objectDataTest
    ? objectDataTest.statements.nodes.map((val) => val.id)
    : "loading";

  let statementName = objectDataTest
    ? objectDataTest.statements.nodes.map((val) => val.displayField)
    : "loading";

  // fetch data satu satu sbar
  const { data: statementByid } = qoreContext
    .view("allStatements")
    .useGetRow(statementId[indexQuestion]);

  let dataStatement = statementByid;
  let seasonsHeader = dataStatement ? dataStatement.name : null;

  let mappedStatement = dataStatement
    ? dataStatement.answers.map((val) => ({ id: indexQuestion + 1, ...val }))
    : null;

  // ------------------------------------FUNCTION GENERATE QUESTION----------------------------------------------------//
  // component did mount set refresh indexQuestion
  useEffect(() => {
    setIndexQuestion(0);
    sectionAnswer = [];
  }, []);

  useEffect(() => {
    colIdArr = [];
  }, [indexQuestion]);

  function nextQuest(e) {
    e.preventDefault();
    if (indexQuestion + 1 != questLength) {
      setIndexQuestion(indexQuestion + 1);
      colIdArr = [];
    } else {
      console.log("Selesai pertanyaan habis");
      let Result = getResult(sectionAnswer, statementName);
      console.log(Result, "FINAL RESULT");
      history.push({
        pathname: "/resultfree",
        state: { user: props.user, output: Result },
      });
    }
  }

  // --------------------------------------------FUNCTION PENILAIAN-----------------------------------------------------------------//

  function boxStatus(colId) {
    if (colIdArr.includes(colId) == true) {
      let index = colIdArr.indexOf(colId);
      if (index > -1) {
        colIdArr.splice(index, 1);
      }
      console.log(colIdArr);
    } else if (colIdArr.includes(colId) == false) {
      colIdArr.push(colId);
    }
    // }
  }

  function userAction(idAnswer, colId) {
    sectionAnswer.push(idAnswer);
    setMainAnswer(sectionAnswer);
    setClicked(colId);
    boxStatus(colId);
  }

  return (
    <>
      <div className="question">
        <h5 style={{ color: "#BDBDBD" }}>
          Pertanyaan {indexQuestion + 1} - {questLength}
        </h5>
        <h1>{seasonsHeader ? seasonsHeader : "loading"}</h1>
      </div>
      <div className="grid-container">
        {mappedStatement
          ? mappedStatement.map((el, colId) => {
              return (
                <div key={colId}>
                  {el.id == 0 ? null : (
                    <div
                      className={`col ${
                        colIdArr.includes(colId)
                          ? `active ${colId}`
                          : "inactive"
                      }`}
                      id={colId}
                      onClick={() => userAction(`${el.id}`, colId)}
                    >
                      <>
                        <p>{el.Answer}</p>
                      </>
                    </div>
                  )}
                </div>
              );
            })
          : "loading"}
      </div>
      <div className="button-test" onClick={(e) => nextQuest(e)}>
        {indexQuestion >= questLength - 1 ? "Lihat Hasil" : "Lanjut"}
      </div>
    </>
  );
};

export default Quest;
