import React, { useContext, useEffect, useState } from "react";
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

const EditAnswerModal = ({ setModal, modal, answer, answerId, questionId }) => {
  const [text, setText] = useState("");
  const { questionsDispatch } = useContext(Context);

  useEffect(() => {
    modal && setText(answer?.text);
  }, [modal]);

  const submitAnswer = (e) => {
    e.preventDefault();
    questionsDispatch({
      type: "EDITANS",
      payload: { id: answerId, text: text },
    });
    setModal(false);
  };
  const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <Form>
        <ModalHeader toggle={toggle}>Edit Answer</ModalHeader>
        <ModalBody>
          <Label for="question">Text Area</Label>
          <Input
            type="textarea"
            name="question"
            id="question"
            value={text}
            onChange={({ target }) => setText(target.value)}
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

export default EditAnswerModal;
