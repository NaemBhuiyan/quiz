import React, { useState } from "react";
import { Label, Input, Form, Button, Container } from "reactstrap";

const Question = () => {
  const [question, setQuestion] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div>
      <Container>
        <Form onSubmit={submit}>
          <Label for="question">Text Area</Label>
          <Input
            type="textarea"
            name="question"
            id="question"
            onChange={({ target }) => setQuestion(target.value)}
          />
          <Button type="submit">Save</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Question;
