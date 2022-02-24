import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "reactstrap";
import api from "../utils/api";
import { errorCatch } from "../utils/helpers";

let apiUrl = "todaysprompt";

const Main = () => {
  const [todaysPrompt, setTodaysPrompt] = useState("");

  useEffect(() => {
    getCurrentPrompt();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getCurrentPrompt = () => {
    api.get(api.baseUrl + "/" + apiUrl)
      .then(r => {
        if (r.status === 200) {
          setTodaysPrompt(r.data);
        }
      })
      .catch(e => {
        errorCatch(e);
      });
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Row className="todays-header">
              <Col>Today's One Word Prompt</Col>
            </Row>
            <Row className="todays-owp">
              <Col>{todaysPrompt.name}</Col>
            </Row>
            <Row>
              <Col xs="12" sm="12" md="6" className="links">
                <a href={`http://www.dictionary.com/browse/${todaysPrompt.name}`}>
                  dictionary.com
                </a>
              </Col>
              <Col xs="12" sm="12" md="6" className="links">
                <a href={`http://www.thesaurus.com/browse/${todaysPrompt.name}`}>
                  thesaurus.com
                </a>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {/* <Row>
        <Col xs="12" sm="12" md="6">
          <Card>
            <Row className="todays-header">
              <Col>Today's Phrase Prompt</Col>
            </Row>
            <Row className="todays-other-prompt">
              <Col>Phrase here</Col>
            </Row>
          </Card>
        </Col>
        <Col xs="12" sm="12" md="6">
          <Card>
            <Row className="todays-header">
              <Col>Today's Lyric (or something) Prompt</Col>
            </Row>
            <Row className="todays-other-prompt">
              <Col>Lyrics or whatev here</Col>
            </Row>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Main;