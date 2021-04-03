import React, {Component, useState} from "react";
import '../styling/style.css';
import {
  Card, ListGroup, ListGroupItem, Container, Carousel, Button
} from 'react-bootstrap';
import ReactDOM from 'react-dom';

const RecipeList = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      damn
    </div>
//     <Container className='cardlist'>
//       <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
//       <Carousel.Item className='carouselCard'>
//       <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>
//       </Carousel.Item>
//     <Carousel.Item className='carouselCard'>
//     <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content. jfods;a jioj fdlsa; jfkdl;jfld;jafkl fdjksla;f jdksla;f jkf jdklas;fj dlas;jf fjdklsa;f jdklsa; fjkdsla; fdjksla;f jkdls;af jkd;
//       f jdkslaf jdisa;fjksl;afjdkls;ajf ksf
//        fjdksa; fjkda;lfjkdls;activeIndex fjdkas;f jdlska;
//         fjdsafl;jdsafjlfjika
//         f djskalf; jdkslf jdlska fjikaos;fjkdlsa;fj kd
//         f djasklf' jdsalfj djasklf fjdkasl;fjdsal'
//          fjkdal;fjidlka;fdjksla
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>
//     </Carousel.Item>
//     </Carousel>
//     </Container>
  )
}

export default RecipeList;


