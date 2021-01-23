import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Form,
} from "reactstrap";
import Context from "../context/Context";

const AnswerModal = ({ setModal, modal, questionId }) => {
  const [answerText, setAnswerText] = useState();
  const { questionsDispatch } = useContext(Context);
  const submitAnswer = (e) => {
    e.preventDefault();
    const newAnswer = {
      id: uuidv4(),
      text: answerText,
    };

    questionsDispatch({
      type: "ADD-ANSWER",
      id: questionId,
      payload: newAnswer,
    });
    setAnswerText("");
    setModal(false);
  };

  const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <Form>
        <ModalHeader toggle={toggle}>Answer</ModalHeader>
        <ModalBody>
          <Label for="question">Text Area</Label>
          <Input
            type="textarea"
            name="question"
            id="question"
            value={answerText}
            onChange={({ target }) => setAnswerText(target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            type="submit"
            className="mt-4"
            onClick={submitAnswer}>
            Save
          </Button>
          <Button
            type="submit"
            className="mt-4"
            onClick={() => {
              setModal(false);
            }}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AnswerModal;
