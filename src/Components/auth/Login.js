import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

const Login = () => {
  return (
    <div>
      <Container>
        <h3 className=" mt-5 text-center">Log in</h3>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </FormGroup>
              <Button>Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
