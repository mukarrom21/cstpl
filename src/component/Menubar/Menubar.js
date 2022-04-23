import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const Menubar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Website Title</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/**************** home ****************/}
              <Nav.Link href="#home">Home</Nav.Link>
              {/* DropDown items 1 */}
              <NavDropdown title="Item-1" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  sub item 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  sub item 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  sub item 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              {/* DropDown items 2 */}
              <NavDropdown title="Item-2" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  sub item 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  sub item 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  sub item 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              {/* DropDown items 3 */}
              <NavDropdown title="Item-3" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  sub item 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  sub item 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  sub item 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              {/* DropDown items 4 */}
              <NavDropdown title="Item-4" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  sub item 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  sub item 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  sub item 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              {/* DropDown items 5 */}
              <NavDropdown title="Item-5" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  sub item 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  sub item 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  sub item 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* Search Option */}
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {/* Login */}
            <Button variant="success" className="ms-4">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
