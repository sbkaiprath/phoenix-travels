import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../App.css";
import {Redirect} from 'react-router-dom'


class TourCard extends React.Component{

  state={
    redirect:false,

  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }  
  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname:'/tour',
        state:this.props.tourcard
      }} />
    }}
   
  render(){
    const url="http://localhost:5000/" + this.props.tourcard.imageId;
    return (
      <Card>
      {this.renderRedirect()}
        <CardImg top width="100%" src={url} alt="Hello everyone" />
        <CardBody>
        <Button variant="outline-info" style={{marginBottom:15}} onClick={this.setRedirect}>Read more</Button>{' '}
          <CardTitle>{this.props.tourcard.packageName}</CardTitle>
          <CardSubtitle>{this.props.tourcard.packageType}</CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}

export default TourCard;
