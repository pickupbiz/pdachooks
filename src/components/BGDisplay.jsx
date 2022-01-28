import React, { useState } from "react";
import "./BGDisplay.css";
import { Row, Col, Button } from "react-bootstrap";

export const BGDisplay = () => {
  const [cls, setCls] = useState("bulbOff");
  return (
    <div>
      <Row>
        <Col>
          <div className={cls}>
            <b>Bajaj</b>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => setCls("bulb")}>On</Button>
        </Col>
        <Col>
          <Button onClick={() => setCls("bulbOff")}>Off</Button>
        </Col>
      </Row>
    </div>
  );
};
