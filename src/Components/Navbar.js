import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import Context from "../context/Context";

const AppNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const { isLogin, setIsLogin, setIsAdmin } = useContext(Context);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const history = useHistory();

  return (
    <div>
      <Navbar expand="md" color="light" light>
        <NavbarBrand href="/" className="mr-auto">
          Quiz
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto ml-4" navbar>
            <NavItem>
              <NavLink tag={Link} to="/questions">
                Question
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/answers">
                Answers
              </NavLink>
            </NavItem>
          </Nav>
          {isLogin && (
            <Button
              color="info"
              onClick={() => {
                localStorage.removeItem("admin");
                setIsAdmin(false);
                setIsLogin(false);
                history.push("/");
              }}>
              Log out
            </Button>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
