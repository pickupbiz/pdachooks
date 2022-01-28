import React, { useState } from "react";
import "./BGDisplay.css";
import { Row, Col, Button } from "react-bootstrap";

export const BGDisplay = () => {
  const [cls, setCls] = useState("bulbOff");
  return (
    <div className={cls}>
      <Button
        onClick={() => (cls === "bulb" ? setCls("bulbOff") : setCls("bulb"))}
        variant={cls === "bulb" ? "danger" : "success"}
      >
        {cls === "bulb" ? "Off" : "On"}
      </Button>
    </div>
  );
};
