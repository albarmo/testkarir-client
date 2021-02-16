import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import { initialData } from "./initialData.js";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

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

var mainAnswer = [];
var answerBox = ["task-1", "task-2", "task-3", "task-4"];

const QuestTest = () => {
  const [state, setState] = useState(initialData);
  let [indexQuestion, setIndexQuestion] = useState(0);

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
    mainAnswer.push(answerBox);
    setIndexQuestion(indexQuestion + 1);
    console.log(indexQuestion + 1, "indexQ");
    console.log(answerBox, "<< current answer");
    console.log(mainAnswer, "<<< Main Answer >>");
  };

  return (
    <React.Fragment>
      <Title>Pernyataan ke {indexQuestion + 1}</Title>
      <p style={{ marginLeft: "20%" }}>
        *drag and drop pernyataan yang paling mendekati diri anda
      </p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-cards" direction="horizontal" type="card">
          {(provided) => (
            <CardContainer ref={provided.innerRef} {...provided.droppableProps}>
              {state.cardOrder.map((cardId, index) => {
                const card = state.cards[cardId];
                let tasks = state.tasks[indexQuestion];

                return (
                  <Card key={cardId} card={card} tasks={tasks} index={index} />
                );
              })}
              {provided.placeholder}
            </CardContainer>
          )}
        </Droppable>
      </DragDropContext>
      <div
        className="button-test"
        style={{ marginLeft: "39%" }}
        onClick={() => nextAndPush()}
      >
        Lanjut
      </div>
    </React.Fragment>
  );
};

export default QuestTest;
