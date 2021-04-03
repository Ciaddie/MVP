import React, {Component} from "react";
import '../styling/style.css';
import {
  Container, Jumbotron, Form, Button, Card, ListGroup, ListGroupItem
} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Insert from './Insert.jsx';
import RecipeList from './RecipeList.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddRecipe from './AddRecipe';
//import { hot } from 'react-hot-loader/root';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipies: []
    }
    //bind functions here
  }
  render() {
    return (
      <>
      <Jumbotron fluid className='header'>
        <Container>
          <h1 className='title'>Cook, No Book</h1>
          <p className='subtitle'>
            Store all the recipes you need right here with just a single link!
          </p>
        </Container>
      </Jumbotron>

      <Container>
        <Insert />
      </Container>

      <Container>
        <RecipeList />
      </Container>

      <Container>
        <AddRecipe />
      </Container>

      </>
    )
  }


}

export default App;