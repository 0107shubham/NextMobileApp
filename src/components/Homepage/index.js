import React, { useEffect, useState } from "react";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Homepage = ({ username }) => {
  const [jokes, setJokes] = useState([]);

  const history = useHistory();

  const logout = () => {
    history.push("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      );
      const data = await response.json();
      console.log("data", data.jokes);
      setJokes(data.jokes);
    };

    fetchData();
  }, []);

  console.log(jokes);

  return (
    <Container className="mt-5 bg-Primary ">
      <Row
        style={{
          backgroundColor: "",
          marginBottom: "10px",
        }}
      >
        <Col>
          <h2>Welcome, {username}!</h2>
          <h3>Jokes:</h3>
        </Col>
        <Col
          style={{
            backgroundColor: "",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button onClick={logout} variant="secondary">
            Logout
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <tbody>
          {jokes.map((joke, index) => (
            <p className="alert alert-danger alert-dismissible fade show">
              {joke.joke}
            </p>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Homepage;
