import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getRankRestult } from "../helpers/getRankResult";
import qoreContext from "../qoreContext";
import { dataQuest } from "./initialData";
import "./style/style.css";
import axios from "axios";

let indexQuestion = 0;
const mainAnswer = [];
const mainAnswerAlpha = [];

const QuestTest = () => {
  const { id } = useParams();

  //  ----------------------------------Qore SDK -------------------------------------------
  const { data: allStatementsGroup } = qoreContext
    .view("allStatementsGroup")
    .useListRow({
      limit: 100,
    });

  let filteredByTestId = allStatementsGroup.filter(
    (val) => val.testId.id === id
  );

  let statementId = filteredByTestId[0]
    ? filteredByTestId[0].statements.nodes.map((val) => val.id)
    : "loading";

  let index = 0;
  let dataOfAnswer = [];

  const { data: statement } = qoreContext
    .view("allStatements")
    .useGetRow(statementId[index]);

  const { data: allStatement, status } = qoreContext
    .view("allStatements")
    .useListRow({
      limit: 100,
    });

  // filter data by statementId
  let image =
    "https://images.vexels.com/media/users/3/193246/isolated/preview/89e77acd7bf8bed338e66e8aba45f051-covid-19-girl-character-icon-by-vexels.png";
  let alphaKey = ["A", "B", "C", "D"];
  let numberKey = ["1", "2", "3", "4"];

  const dataFiltered = () => {
    let data100 = [];
    for (let i = 0; i < allStatement.length; i++) {
      // console.log(`${allStatement[i].id} iterasi ke- ${i}`);
      for (let j = 0; j < statementId.length; j++) {
        if (allStatement[i].id === statementId[j]) {
          var answers = allStatement
            ? allStatement[i].answers.map((val, id) => ({
                id: numberKey[id],
                name: val.Answer,
                type: alphaKey[id],
                thumb: image,
              }))
            : "loading answer";

          data100.push(answers);
        }
      }
    }
    return data100;
  };

  let statementLoop = dataFiltered();
  console.log(
    statementLoop ? statementLoop[indexQuestion] : null,
    "statementLoop"
  );
  console.log(dataQuest[indexQuestion], "data of quest");

  // -------------------------------------QOre SDK ----------------------------------------------

  const { user } = qoreContext.useCurrentUser();
  const history = useHistory();
  const [option, updateOption] = useState();
  const [questStatus, setQuestStatus] = useState(false);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      updateOption(statementLoop[indexQuestion]);
    }, 1000);
    setLoading(false);
  }, [allStatement]);

  useEffect(() => {
    if (!option) {
      setLoading(true);
    } else if (option) {
      setLoading(false);
    }
  });

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    console.log(option, "option");
    const items = Array.from(option);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateOption(items);
  }

  // current answer while user change list
  console.log(option, "option");
  if (option) {
    var listItem = option.map((val) => Number(val.id));
    var listItemByType = option.map((val) => val.type);
  }

  // handling generate and display quest
  function next() {
    if (indexQuestion < dataQuest.length - 1) {
      indexQuestion++;
      mainAnswer.push(listItem);
      mainAnswerAlpha.push(listItemByType);
      updateOption(dataQuest[indexQuestion]);
    } else {
      console.log("selesai");
      setQuestStatus(true);
      mainAnswer.push(listItem);
      mainAnswerAlpha.push(listItemByType);
      let final = getRankRestult(mainAnswerAlpha);
      setResult(final);
      console.log(final);
      history.push("/result", { user: user, result: final });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 style={{ color: "#117EA0" }}>
            Urutkan pekerjaan sesuai keinginanmu
          </h1>
          <h4>
            Pernyataan ke {indexQuestion + 1} dari {statementId.length}
            pernyataan
          </h4>
        </div>
        {loading ? <h1 style={{ color: "black" }}>Loading Data</h1> : null}
        <div className="container-dnd">
          <div className="dnd-ranger">
            <p>suka banget</p>
            <p>boleh juga</p>
            <p>hmm....</p>
            <p>engga deh</p>
          </div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {option
                    ? option.map(({ id, name, thumb }, index) => {
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div className="characters-thumb">
                                  <img src={thumb} alt={`${name} Thumb`} />
                                </div>
                                <p>{name}</p>
                              </li>
                            )}
                          </Draggable>
                        );
                      })
                    : "loading"}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        {questStatus ? (
          <div className="button-dnd" onClick={() => next()}>
            Selesai, lihat hasil
          </div>
        ) : (
          <div className="button-dnd" onClick={() => next()}>
            lanjoot
          </div>
        )}
      </header>
    </div>
  );
};

export default QuestTest;
