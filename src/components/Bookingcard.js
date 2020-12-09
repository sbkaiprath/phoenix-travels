import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import image1 from '../img/img-card (1).jpg'

const Example = (props) => {
  return (
    <CardDeck>
      <Card style={{margin:" 50px 400px"}}>
        <CardImg top width="50%" src={image1} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Example;