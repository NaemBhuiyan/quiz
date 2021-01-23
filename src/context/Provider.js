import React, { useState, useEffect, useReducer } from "react";
import { arrayReducer } from "../reducers/arrayReducers";
import Context from "./Context";

const initialQuestions = JSON.parse(localStorage.getItem("questions")) || [];

const Provider = ({ children }) => {
  const [questions, questionsDispatch] = useReducer(
    arrayReducer,
    initialQuestions
  );

  const [answerModal, setAnswerModal] = useState(false);
  const [userType, setUserType] = useState(
    JSON.parse(localStorage.getItem("userType"))
  );

  const admin = {
    email: "admin@email.com",
    password: "admin",
  };
  // set localStorage
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  const value = {
    admin,
    questions,
    questionsDispatch,
    answerModal,
    setAnswerModal,
    userType,
    setUserType,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
