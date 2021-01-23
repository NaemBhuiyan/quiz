import React, { useContext } from "react";
import classNames from "classnames";
import Context from "../context/Context";

import { Button, Row, Col, Card, CardBody, CardFooter } from "reactstrap";
const QuestionList = ({ setQuestion, setQuestionId, setEditQuestionModal }) => {
  const { questionsDispatch, questions } = useContext(Context);

  return (
    <Row className="justify-content-center mt-4">
      <Col>
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
                  color="primary"
                  onClick={() => {
                    setEditQuestionModal(true);
                    setQuestion(question);
                    setQuestionId(question.id);
                  }}>
                  Edit
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </Col>
    </Row>
  );
};

export default QuestionList;
