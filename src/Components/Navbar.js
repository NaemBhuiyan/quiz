import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
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
import ToastNotice from "./Toast";

const AppNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [show, setShow] = useState(false);
  const [message, setMassage] = useState(`You are not logged in`);
  const { userType, handleLogOut } = useContext(Context);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const handleShowToast = () => {
    !userType && setShow(true);
    if (userType === "user") {
      setMassage("You Have No Access");
      setShow(true);
    }
  };
  return (
    <div>
      <Navbar expand="md" color="light" light>
        <NavbarBrand tag={Link} to="/" className="mr-auto">
          Quiz
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto ml-4" navbar>
            <NavItem onClick={handleShowToast}>
              <NavLink tag={Link} to="/questions">
                Question
              </NavLink>
            </NavItem>
            <NavItem onClick={() => !userType && setShow(true)}>
              <NavLink tag={Link} to="/answers">
                Answers
              </NavLink>
            </NavItem>
          </Nav>
          {userType && (
            <Button color="info" onClick={handleLogOut}>
              Log out
            </Button>
          )}
        </Collapse>
      </Navbar>
      <ToastNotice message={message} show={show} setShow={setShow} />
    </div>
  );
};

export default AppNavbar;
