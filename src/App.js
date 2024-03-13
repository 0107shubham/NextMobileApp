import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <Router>
      <Container fluid>
        <Switch>
          <Route exact path="/">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/homepage">
            <Homepage username={loggedInUser} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
