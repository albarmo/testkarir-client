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
  const { data: allStatementsGroup, status } = qoreContext
    .view("allStatementsGroup")
    .useListRow({
      limit: 10,
    });

  // console.log(status);

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

  let image =
    "https://images.vexels.com/media/users/3/193246/isolated/preview/89e77acd7bf8bed338e66e8aba45f051-covid-19-girl-character-icon-by-vexels.png";
  let alphaKey = ["A", "B", "C", "D"];
  let numberKey = ["1", "2", "3", "4"];

  var answers = statement
    ? statement.answers.map((val, id) => ({
        id: numberKey[id],
        name: val.Answer,
        type: alphaKey[id],
        thumb: image,
      }))
    : "loading answer";

  dataOfAnswer.push(answers);
  dataOfAnswer.push(answers);
  dataOfAnswer.push(answers);
  dataOfAnswer.push(answers);
  dataOfAnswer.push(answers);
  dataOfAnswer.push(answers);
  // console.log(dataQuest, "data of quest");
  // console.log(dataOfAnswer, "data of fetch");

  let mappedAnswer = answers ? [answers].map((val) => val) : null;
  // console.log(mappedAnswer, "mapped answer");

  // -------------------------------------QOre SDK ----------------------------------------------

  const history = useHistory();
  const [option, updateOption] = useState(dataQuest[indexQuestion]);
  const [option2, updateOption2] = useState(mappedAnswer[indexQuestion]);
  const [questStatus, setQuestStatus] = useState(false);
  const [result, setResult] = useState("");

  const { user } = qoreContext.useCurrentUser();

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    console.log(option, "option");
    console.log(answers, "answer");
    const items = Array.from(option);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateOption(items);
  }

  // current answer while user change list
  let listItem = option.map((val) => Number(val.id));
  let listItemByType = option.map((val) => val.type);
  console.log(listItemByType);

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
      {/* {JSON.stringify(option)}
      <br></br>
      <br></br>
      {JSON.stringify(answers)} */}
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
