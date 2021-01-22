import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import classNames from "classnames";
import Context from "../context/Context";
import AnswerModal from "./AnswerModal";

const Answers = () => {
  const [allQuestion, setAllQuestion] = useState();
  const { questions, answerModal, setAnswerModal, answers } = useContext(
    Context
  );
  useEffect(() => {
    setAllQuestion(questions);
  }, [questions]);

  const getAnswers = (id) => {
    console.log(answers.filter((answer) => answer.questionId === id));
    return answers.filter((answer) => {
      if (answer.questionId === id) {
        console.log(answer.questionId === id);
      }
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h1 className="text-center my-5">Give Answer</h1>
          {allQuestion?.map((question, index) => {
            return (
              <Card
                key={question.id}
                className={classNames({
                  "mt-3": index > 0,
                })}>
                <CardBody className="bg-light">
                  <p
                    style={{ fontSize: "1.5rem", fontWeight: 700 }}
                    className="mb-1">
                    {question.text}
                  </p>
                  <span className="text-secondary">Asked by </span>{" "}
                  <span className="text-info">Admin</span>
                </CardBody>
                <CardFooter className="d-flex justify-content-end bg-transparent border-top-0">
                  <Button
                    color="primary"
                    onClick={() => {
                      setAnswerModal(true);
                    }}>
                    Answer
                  </Button>
                  <AnswerModal
                    modal={answerModal}
                    setModal={setAnswerModal}
                    questionId={question.id}
                  />
                </CardFooter>
                <hr />
                <p className="text-warning pl-3">Top Answer</p>
                <ListGroup>
                  {getAnswers(question.id)?.map((answer) => {
                    return (
                      <ListGroupItem key={answer.id}>
                        <ListGroupItemHeading style={{ fontSize: "1rem" }}>
                          Login user
                        </ListGroupItemHeading>
                        <ListGroupItemText className="mt-3">
                          {answer.text}
                        </ListGroupItemText>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Answers;
