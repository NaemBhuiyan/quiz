import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import classNames from "classnames";
import Context from "../context/Context";

const Answers = () => {
  const [allQuestion, setAllQuestion] = useState();
  const { questions } = useContext(Context);
  useEffect(() => {
    setAllQuestion(questions);
  }, [questions]);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h1 className="text-center my-5">Give Answer</h1>
          {allQuestion?.map((question, index) => {
            return (
              <Card
                key={question.id}
                className={classNames("font-weight-medium", {
                  "mt-3": index > 0,
                })}>
                <CardBody style={{ fontSize: "1.5rem" }}>
                  <span className="mr-3">{index + 1}.</span>
                  <span>{question.text}</span>
                </CardBody>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Answers;
