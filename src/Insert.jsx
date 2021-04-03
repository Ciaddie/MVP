import React, {Component} from "react";
import '../styling/style.css';
import {
  Form, Button, Container
} from 'react-bootstrap';
import ReactDOM from 'react-dom';

const Insert = () => {
  return (
    // <Container>
    //   <Form className='inputBar'>
    //     <Form.Control type='link' placeholder='insert recipe link here!' />
    //     <Button variant="outline-warning">enter</Button>
    //   </Form>
    // </Container>

    <Container>
        <div className="input-group mb-5">
          <input type="text" class="form-control py-2 border-right-0 border" placeholder="Insert your link here!"
          />
        <div class="input-group-append">
          <button class="btn btn-outline-warning border-left-0 border" type="button">+</button>
        </div>
        {/* <QuestionsList question={this.dynamicSearch} /> */}
        </div>
      </Container>
  )
}

export default Insert;