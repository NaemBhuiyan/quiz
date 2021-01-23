import React, { useState, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();

  // set localStorage
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  const handleLogOut = () => {
    localStorage.removeItem("userType");
    setUserType(null);
    history.push("/");
  };

  const value = {
    questions,
    questionsDispatch,
    answerModal,
    setAnswerModal,
    userType,
    setUserType,
    handleLogOut,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
