import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const dummyUsername = "shubham";
    const dummyPassword = "Indore@123456";

    if (username === dummyUsername && password === dummyPassword) {
      onLogin(username);
      history.push("/homepage");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container
      fluid
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#d2d2e0",

        display: "flex",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        style={{
          backgroundColor: "white",
          height: "70%",
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formUsername">
          <h2>Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Label>Username: shubham</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            // style={{ width: "75%" }}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password : Indore@123456</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            // style={{ width: "75%" }}
          />
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
