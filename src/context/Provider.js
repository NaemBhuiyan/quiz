import React, { useState, useEffect, useReducer } from "react";
import { arrayReducer } from "../reducers/arrayReducers";
import Context from "./Context";

const Provider = ({ children }) => {
  const [questions, questionsDispatch] = useReducer(
    arrayReducer,
    JSON.parse(localStorage.getItem("questions")) || []
  );

  const [answerModal, setAnswerModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState();

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
    isAdmin,
    setIsAdmin,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
