import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";
import { initialData } from "./initialData.js";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import qoreContext from "../qoreContext";

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

const instruction =
  "Disetiap nomor item, terdapat empat pilihan pekerjaan A, B, C dan D. Tugas anda adalah mengurutkan pilihan pekerjaan tersebut, mulai dari pekerjaan yang paling anda sukai sampai pekerjaan yang paling tidak anda sukai. Berilah rangking dari 1 sampai 4 pada masing-masing pekerjaan dengan cara menuliskan angka 1 = pekerjaan yang paling disukai, 2 = pekerjaan yang cukup disukai, 3 = pekerjaan yang kurang disukai, dan 4 = pekerjaan yang paling tidak disukai. Tulislah jawaban anda pada lembar jawaban yang disediakan.";

var mainAnswer = [];
var answerBox = ["task-1", "task-2", "task-3", "task-4"];

const QuestTest = () => {
  const history = useHistory();
  const [isStart, setIsStart] = useState(false);
  const [state, setState] = useState(initialData);
  const [userData, setUserData] = useState({});
  let [indexQuestion, setIndexQuestion] = useState(0);
  const { user } = qoreContext.useCurrentUser();

  useEffect(() => {
    setUserData(user);
  }, []);

  const onDragEnd = (result) => {
    const { draggableId, source, destination, type } = result;
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    if (type === "task") {
      const start = state.cards[source.droppableId];
      const finish = state.cards[destination.droppableId];

      if (start === finish) {
        const card = state.cards[source.droppableId];
        const newTaskIds = Array.from(card.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        // slice string answer and get array of nums (answer format)
        const slicedId = newTaskIds.map((val, id) => {
          let idAnswer = val.slice(5);
          return Number(idAnswer);
        });
        console.log(slicedId, " sliced id");
        // reasignment list of answer
        answerBox = slicedId;

        const newCard = {
          ...card,
          taskIds: newTaskIds,
        };
        const newState = {
          ...state,
          cards: {
            ...state.cards,
            [newCard.id]: newCard,
          },
        };
        setState(newState);
        return;
      }
    }
  };

  const nextAndPush = () => {
    if (indexQuestion < state.tasks.length) {
      mainAnswer.push(answerBox);
      setIndexQuestion(indexQuestion + 1);
      //   console.log(indexQuestion + 1, "indexQ");
      //   console.log(answerBox, "<< current answer");
      //   console.log(mainAnswer, "<<< Main Answer >>");
    } else {
      console.log(
        "pertanyaan habis redirect ke next quest atau halaman result"
      );
    }
  };

  const getResult = () => {
    mainAnswer.push(answerBox);
    let data = mainAnswer;
    console.log(user);
    console.log(mainAnswer.length);
    history.push("/result", { user: user, result: "on dev" });
  };

  return (
    <React.Fragment>
      {isStart ? (
        <React.Fragment>
          <>
            <Title>Pernyataan ke {indexQuestion + 1}</Title>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable
                droppableId="all-cards"
                direction="horizontal"
                type="card"
              >
                {(provided) => (
                  <CardContainer
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {state.cardOrder.map((cardId, index) => {
                      const card = state.cards[cardId];
                      let tasks = state.tasks[indexQuestion];

                      return (
                        <Card
                          key={cardId}
                          card={card}
                          tasks={tasks}
                          index={index}
                        />
                      );
                    })}
                    {provided.placeholder}
                  </CardContainer>
                )}
              </Droppable>
            </DragDropContext>
            <p style={{ marginLeft: "25%" }}>
              *drag and drop pernyataan yang paling mendekati diri anda
            </p>
            {indexQuestion === state.tasks.length - 1 ? (
              <div
                className="button-test"
                style={{ marginLeft: "39%" }}
                onClick={() => getResult()}
              >
                Finish
              </div>
            ) : (
              <div
                className="button-test"
                style={{ marginLeft: "39%" }}
                onClick={() => nextAndPush()}
              >
                Lanjut
              </div>
            )}
          </>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <>
            <div className="question">
              <h1>Instruksi</h1>
              <p style={{ color: "black" }}>{instruction}</p>
              <div
                className="button-test"
                style={{ marginLeft: "39%" }}
                onClick={() => setIsStart(!isStart)}
              >
                Oke, Mulai test
              </div>
            </div>
          </>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default QuestTest;
