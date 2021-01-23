import React, { useContext, useState } from "react";
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
import EditModal from "./EditQuestionModal";
import EditAnswerModal from "./EditAnswerModal";

const Answers = () => {
  const [questionId, setQuestionId] = useState();
  const [givenAnswerId, setGivenAnswerId] = useState();
  const [question, setQuestion] = useState();
  const [givenAnswer, setGivenAnswer] = useState();
  const [editQuestionModal, setEditQuestionModal] = useState(false);
  const [editAnswerModal, setEditAnswerModal] = useState(false);
  const {
    questions,
    answerModal,
    setAnswerModal,
    questionsDispatch,
  } = useContext(Context);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h1 className="text-center my-5">Give Answer</h1>
          {questions?.map((question, index) => {
            return (
              <Card
                key={question.id}
                className={classNames({
                  "mt-4": index > 0,
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
                      setQuestionId(question.id);
                    }}>
                    Answer
                  </Button>
                  <Button
                    className="ml-2"
                    color="danger"
                    onClick={() => {
                      questionsDispatch({
                        type: "REMOVE",
                        id: question.id,
                        payload: question,
                      });
                    }}>
                    Delete
                  </Button>
                  <Button
                    className="ml-2"
                    color="danger"
                    onClick={() => {
                      setEditQuestionModal(true);
                      setQuestion(question);
                      setQuestionId(question.id);
                    }}>
                    Edit
                  </Button>
                </CardFooter>
                <hr />
                {/* {question.answers.map((answer, index) => {
                  return <p key={index}>{answer.text}</p>;
                })} */}
                <p className="text-warning pl-3">Top Answer</p>
                {question.answers.length ? (
                  <ListGroup>
                    {question.answers.map((answer, index) => {
                      return (
                        <ListGroupItem key={answer.id}>
                          <ListGroupItemHeading style={{ fontSize: "1rem" }}>
                            Login user
                          </ListGroupItemHeading>
                          <ListGroupItemText className="mt-3">
                            {answer.text}
                          </ListGroupItemText>
                          <Button
                            className="ml-2"
                            color="danger"
                            onClick={() => {
                              setEditAnswerModal(true);
                              setGivenAnswer(answer);
                              setGivenAnswerId(answer.id);
                            }}>
                            Edit
                          </Button>
                        </ListGroupItem>
                      );
                    })}
                  </ListGroup>
                ) : (
                  <p className="text-danger pl-3">No ans given yet</p>
                )}
              </Card>
            );
          })}
        </Col>
        <AnswerModal
          modal={answerModal}
          setModal={setAnswerModal}
          questionId={questionId}
        />
        <EditModal
          modal={editQuestionModal}
          setModal={setEditQuestionModal}
          question={question}
          questionId={questionId}
        />
        <EditAnswerModal
          modal={editAnswerModal}
          setModal={setEditAnswerModal}
          answer={givenAnswer}
          answerId={givenAnswerId}
        />
      </Row>
    </Container>
  );
};

export default Answers;
