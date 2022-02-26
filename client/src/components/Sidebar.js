import { Link } from "react-router-dom";
import { Card, Col, Container, Nav, Navbar, 
  NavItem, NavLink, Row } from "reactstrap";

const Sidebar = ({ children }) => {

  return (
    <Container>
      <Row>
        <Col sm="3">
          <Card>
            <Navbar color="light" className="nav-links">
              <Link to="/">One Word Prompts</Link>
              {/* <NavbarToggler
                className="me-2"
                id="toggler"
              />
              <UncontrolledCollapse toggler="#toggler"> */}
              <Nav vertical className="nav-links">
                <hr />
                <NavItem>
                  <Link to="/about">About</Link>
                </NavItem>
                <NavItem>
                  <Link to="/previousprompts">Previous Prompts</Link>
                </NavItem>
                <NavItem>
                  <Link to="">Prompt Generator</Link>
                </NavItem>
                <NavItem>
                  <Link to="">Similar Sites</Link>
                </NavItem>
              </Nav>
              {/* </UncontrolledCollapse> */}
            </Navbar>
          </Card>
        </Col>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;