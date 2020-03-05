import Login from "../components/Login";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import MyNavbar from '../components/MyNavbar';

function LoginPage() {
  return <>
    <MyNavbar></MyNavbar>
    <Container>
      <Row>
        <Col>
          <h3>Login</h3>
          <Login />
        </Col >
      </Row >
    </Container >
  </>;
};

export default LoginPage; 