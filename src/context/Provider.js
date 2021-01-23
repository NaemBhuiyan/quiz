import React, { useState, useEffect, useReducer } from "react";
import { arrayReducer } from "../reducers/arrayReducers";
import Context from "./Context";

const Provider = ({ children }) => {
  const [questions, questionsDispatch] = useReducer(
    arrayReducer,
    JSON.parse(localStorage.getItem("questions")) || []
  );

  const [answerModal, setAnswerModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem("admin") || false)
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
    isAdmin,
    setIsAdmin,
    isLogin,
    setIsLogin,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
