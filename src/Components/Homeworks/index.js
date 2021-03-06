import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - MAY 24 EDITION</h1>
          <p className="lead">My Name is Ingrid Fuentes and I am student here </p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
          <th>Github</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework1</td>
          <td>Git Practice. Provide link of your repo here </td>
          <td><a href="https://github.com/IngridFuentes/gitpracticehw1" target="_blank" rel="noopener noreferrer"> Link</a> </td>
       
      </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>Javascript - Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/ingridfuentes/pen/abJwLmO?editors=1111" target="_blank" rel="noopener noreferrer"> Link</a> </td>
       
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Homework 2.1</td>
          <td>Local Storage and Session storage- Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/ingridfuentes/pen/XWMadvX?editors=0001" target="_blank" rel="noopener noreferrer"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">2</th>
          <td>Homework 3.1</td>
          <td>CSS Selectors exercise</td>
          <td><a href="https://codepen.io/ingridfuentes/pen/LYWjwNJ" target="_blank" rel="noopener noreferrer"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">2</th>
          <td>Homework Quiz</td>
          <td>HW Quiz CSS</td>
          <td><a href="https://codepen.io/ingridfuentes/pen/jOBLgOq" target="_blank" rel="noopener noreferrer"> Link</a> </td>
       
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Homework 3.2</td>
          <td>Navigation bar</td>
          <td><a href="https://codepen.io/ingridfuentes/pen/jOBLgOq" target="_blank" rel="noopener noreferrer"> Link</a> </td>
       
      </tr>
      <tr>
          <th scope="row">4</th>
          <td>Homework 3.3</td>
          <td>JS count words</td>
          <td><a href="https://codepen.io/ingridfuentes/pen/bGqLzmp?editors=1111" target="_blank" rel="noopener noreferrer"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">5</th>
          <td>Homework 5.1</td>
          <td>Change theme homework</td>
          <td><a href="https://codepen.io/ingridfuentes/pen/ZEevLEm?editors=1111" target="_blank" rel="noopener noreferrer"> Link</a> </td>
       
      </tr>
      <tr>
          <th scope="row">6</th>
          <td>Homework 10.2</td>
          <td>Lottery homework</td>
          <td><a href="https://codepen.io/ingridfuentes/pen/poeKxvY?editors=1111" target="_blank" rel="noopener noreferrer"> Link</a> </td>
       
      </tr>
      <tr>
          <th scope="row">7</th>
          <td>Homework 12.1</td>
          <td>Carousel React</td>
          <td><a href="https://xenodochial-easley-0d43d5.netlify.app/" target="_blank" rel="noopener noreferrer"> Link</a> </td>
          <td><a href="https://github.com/IngridFuentes/carousel-react" target="_blank" rel="noopener noreferrer"> Link</a> </td>
       
      </tr>
        
      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Homeworks;
