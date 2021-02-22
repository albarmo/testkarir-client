import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getRankRestult } from "../helpers/getRankResult";
import qoreContext from "../qoreContext";
import { dataQuest } from "./initialData";
import "./style/style.css";

let indexQuestion = 0;
const mainAnswer = [];
const mainAnswerAlpha = [];

const QuestTest = () => {
  const history = useHistory();
  const [option, updateOption] = useState(dataQuest[indexQuestion]);
  const [questStatus, setQuestStatus] = useState(false);
  const [result, setResult] = useState("");

  const { user } = qoreContext.useCurrentUser();

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(option);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateOption(items);
  }

  // current answer while user change list
  let listItem = option.map((val) => Number(val.id));
  let listItemByType = option.map((val) => val.type);
  // console.log(listItemByType);

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
          <h1>Urutkan pekerjaan sesuai keinginanmu</h1>
          <h4>
            Pernyataan ke {indexQuestion + 1} dari {dataQuest.length} pernyataan
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
                  {option.map(({ id, name, thumb }, index) => {
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
                  })}
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
