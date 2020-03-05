import React, { useState, useContext } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserContext from '../lib/userContext';

function Dashboard() {
  const [{ username },] = useContext(UserContext);
  return <Container>
    <Col>
      <Row>
        <p>Logged in as {username}</p>
      </Row>
    </Col>
  </Container>
};

export default Dashboard;