import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap"
import "./App.css";
import Pokemon from "./Pokemon";
import Berries from "./Berries";
import Machines from "./Machines"
import errorHandler from "./errorHandler";

class App extends Component {
  render() {
       // alert("Hello -- ");
       
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h1>{this.props.title}</h1>
            <p>Finally; all the Pokémon data you'll ever need, in one place, and easily accessible through a modern RESTful API.</p>
          </div>

          <Grid>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <h2><Link to="/pokemon/page/0"  style={{ textDecoration: 'none' }}>Pokemon</Link></h2>
                <p>Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon.</p>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <h2><Link to="/berries/page/0"  style={{ textDecoration: 'none' }}>Berries</Link></h2>
                <p>Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon.</p>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <h2><Link to="/machines/page/0"  style={{ textDecoration: 'none' }}>Machines</Link></h2>
                <p>Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h3><Link to="/"  style={{ textDecoration: 'none' }}>Back to Home</Link></h3>
              </Col>
            </Row>
          </Grid>
          <br></br>

          <div className="App-body">
            <Switch>
              <Route path="/pokemon/" component={Pokemon} />
              <Route path="/berries/" component={Berries} />
              <Route path="/machines/" component={Machines} />
              <Route path="/error/" component={errorHandler} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;

