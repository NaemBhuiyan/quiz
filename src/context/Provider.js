import React, { useState, useEffect } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("questions")) || []
  );
  const admin = {
    email: "admin@mail.com",
    password: "admin",
  };
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);
  console.log(questions);
  const value = { admin, questions, setQuestions };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
