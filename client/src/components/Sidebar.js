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
                  <NavLink href="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/previousprompts">
                    Previous Prompts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">
                    Prompt Generator
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">
                    Similar Sites
                  </NavLink>
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