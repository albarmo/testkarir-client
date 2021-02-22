import react from "react";
import qoreContext from "../qoreContext";

const generateHistory = (user, result, details, send) => {
  console.log(result.outputId.id, "<<< result");

  console.log(details, "<< details");
  let typeTest = details.typeTestId
    ? details.typeTestId.nodes.map((val) => val.id)
    : "loading";
  console.log(typeTest, " typetesss");

  async function createHistoryTest() {
    let createNewHistory = await send({
      testId: [result.testId.id],
      date: new Date(),
      userId: [user.data.id],
      type: typeTest ? typeTest : null,
      result: [result.outputId.id],
    });
    createHistoryTest
      ? console.log("success created history test")
      : console.error("error created history");
  }

  if (user && result) {
    createHistoryTest();
  }
  return <></>;
};

export default generateHistory;
