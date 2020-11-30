import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import  '../assets/css/Card.css'

const Example = (props) => {
  return (
    <div className="card">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        </CardBody>
        <img  src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg" alt="An image"/>
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;