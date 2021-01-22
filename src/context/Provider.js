import React, { useState, useEffect } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("questions")) || []
  );
  const [answers, setAnswers] = useState(
    JSON.parse(localStorage.getItem("answers")) || []
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

  // set localStorage
  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  const value = {
    admin,
    questions,
    setQuestions,
    answerModal,
    setAnswerModal,
    answers,
    setAnswers,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
