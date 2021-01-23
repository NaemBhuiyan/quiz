import ShowQuestionAnswers from "../Components/ShowQuestionAnswers";
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
    component: ShowQuestionAnswers,
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
