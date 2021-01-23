import React, { useState, useContext } from "react";
import {
  Label,
  Input,
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

import Context from "../context/Context";
import EditModal from "./EditQuestionModal";

const Question = () => {
  const [questionText, setQuestionText] = useState("");
  const [questionId, setQuestionId] = useState();
  const [question, setQuestion] = useState();
  const [editQuestionModal, setEditQuestionModal] = useState(false);

  const { questionsDispatch, questions } = useContext(Context);

  const submitQuestion = (e) => {
    e.preventDefault();
    const newQuestion = {
      id: uuidv4(),
      text: questionText,
      answers: [],
    };
    questionsDispatch({
      type: "ADD",
      payload: newQuestion,
    });
    setQuestionText("");
  };
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1 className="text-center">Add Questions</h1>
          <Form>
            <Label for="question">Text Area</Label>
            <Input
              type="textarea"
              name="question"
              id="question"
              value={questionText}
              onChange={({ target }) => setQuestionText(target.value)}
            />
            <Button type="submit" className="mt-4" onClick={submitQuestion}>
              Save
            </Button>
          </Form>
        </Col>
      </Row>
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
                    color="danger"
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

        <EditModal
          modal={editQuestionModal}
          setModal={setEditQuestionModal}
          question={question}
          questionId={questionId}
        />
      </Row>
    </Container>
  );
};

export default Question;
