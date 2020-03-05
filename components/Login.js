
import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';
import UserContext from '../lib/userContext';

import { login } from '../lib/login';

export default function Login() {

  const [, setUserContext] = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const user = await login({
      email, password
    });

    setUserContext(user);

    if (user) {
      Router.push('/');
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          onChange={e => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
          onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep logged in" />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}