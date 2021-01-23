import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

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
import Context from "../../context/Context";

const Login = () => {
  const { setIsAdmin, admin } = useContext(Context);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const history = useHistory();

  const login = () => {
    if (admin.email === adminEmail && adminPassword === admin.password) {
      localStorage.setItem("admin", JSON.stringify(true));
      setIsAdmin(JSON.parse(localStorage.getItem("admin")));
      history.push("/questions");
    } else {
      history.push("/answers");
    }
  };
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
                  onChange={({ target }) => setAdminEmail(target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                  onChange={({ target }) => setAdminPassword(target.value)}
                />
              </FormGroup>
              <Button onClick={login}>Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
