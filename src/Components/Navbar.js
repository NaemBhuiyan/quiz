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

const AppNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const { userType, handleLogOut } = useContext(Context);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar expand="md" color="light" light>
        <NavbarBrand tag={Link} to="/" className="mr-auto">
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
          {userType && (
            <Button color="info" onClick={handleLogOut}>
              Log out
            </Button>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
