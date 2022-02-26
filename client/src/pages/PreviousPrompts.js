import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "reactstrap";
import _ from "lodash";
import api from "../utils/api";
import { errorCatch } from "../utils/helpers";

const PreviousPrompts = () => {
  const [previousPrompts, setPreviousPrompts] = useState([]);

  useEffect(() => {
    getPreviousPrompts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getPreviousPrompts = () => {
    api.get(api.baseUrl + "/multiDayPrompts")
      .then(r => {
        if (r.status === 200) {
          setPreviousPrompts(r.data);
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
            <Table>
              <tbody>
                {_.map(previousPrompts, p => {
                  return <tr key={p.id}><td>{p.date}</td><td>{p.promptName}</td></tr>;
                })}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PreviousPrompts;