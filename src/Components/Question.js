import React, { useState, useContext, useEffect } from "react";
import { Label, Input, Form, Button, Container, Row, Col } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

import Context from "../context/Context";

const Question = () => {
  const [questionText, setQuestionText] = useState("");
  const { questionsDispatch, isAdmin } = useContext(Context);

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
  return isAdmin ? (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1 className="text-center">Make Questions</h1>
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
    </Container>
  ) : (
    <h1>Your Not Login</h1>
  );
};

export default Question;
