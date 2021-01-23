import React, { useState, useEffect, useReducer } from "react";
import { arrayReducer } from "../reducers/arrayReducers";
import Context from "./Context";

const Provider = ({ children }) => {
  // const [questions, setQuestions] = useState(
  //   JSON.parse(localStorage.getItem("questions")) || []
  // );
  const [questions, questionsDispatch] = useReducer(
    arrayReducer,
    JSON.parse(localStorage.getItem("questions")) || []
  );

  const [answerModal, setAnswerModal] = useState(false);
  const admin = {
    email: "admin@mail.com",
    password: "admin",
  };

  // set localStorage
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  const value = {
    admin,
    questions,
    // setQuestions,
    questionsDispatch,
    answerModal,
    setAnswerModal,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
