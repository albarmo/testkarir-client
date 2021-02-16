import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/navbar";
import QuestTest from "../components/questTest";
import "./style/testPage.css";

const PremiumTest = () => {
  const [isValid, setIsValid] = useState(true);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("");

  let dataUser = { username, age, activity };

  return (
    <>
      <div className="test">
        <Navbar />
        <div className="question-container">
          {isValid ? <QuestTest /> : null}
        </div>
      </div>
    </>
  );
};

export default PremiumTest;
