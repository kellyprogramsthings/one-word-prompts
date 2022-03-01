import { Link } from "react-router-dom";
import { Card, Col, Container, Nav, Navbar, NavItem, Row } from "reactstrap";

const Sidebar = ({ children }) => {
  // TODO: collapse for mobile

  return (
    <Container>
      <Row>
        <Col sm="3">
          <Card>
            <Navbar color="light" className="nav-links">
              <Link to="/">One Word Prompts</Link>
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
                  <Link to="">Other Prompt Sites</Link>
                </NavItem>
              </Nav>
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