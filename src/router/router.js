import Answers from "../Components/Answers";
import Login from "../Components/auth/Login";
import Question from "../Components/Question";

const routers = [
  {
    path: "/questions",
    name: "questions",
    component: Question,
    meta: {
      access: ["admin"],
    },
    exact: true,
  },
  {
    path: "/answers",
    name: "answers",
    component: Answers,
    meta: {
      access: ["admin", "user"],
    },
    exact: true,
  },
  {
    path: "/",
    name: "login",
    component: Login,
    exact: true,
  },
];

export default routers;
