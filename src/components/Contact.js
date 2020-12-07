import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as MapPin } from "../assets/svg/map-pin.svg";
import { ReactComponent as Mail } from "../assets/svg/mail.svg";
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email:"",
      name:"",
      message:"",
      config :{
        headers: { Authorization: `Bearers ${document.cookie}` }
    
      }
}
  this.handleSubmit = this.handleSubmit.bind(this);
}

onChange(e) {
this.setState({[e.target.name]: e.target.value})
} 


handleSubmit= (event)=>{

event.preventDefault();

const contact={
email:this.state.email,
name:this.state.name,
message:this.state.message
}
axios.post('http://localhost:5000/api/reviews',contact,this.state.config)
        .then((res) => {
    console.log(res.data);
    alert("Thank You for submitting your review. This will help us in improving")
        }).catch((error) => {
            alert("Error occured while adding review");
        });}

  render() {
    return (
      <div className="subComponent-lg" id="contactBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Contact</h1>
            <p>GET IN TOUCH WITH US</p>
          </header>
          <section className="svg-group text-center">
            <Row>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Phone width="50" height="55" strokeWidth="1" />
                  <p>123456789</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <MapPin width="55" height="55" strokeWidth="1" />
                  <p>Phoenix travels,Ernakulam</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Mail width="55" height="55" strokeWidth="1" />
                  <p>pheonixtravels@gmail.com</p>
                </div>
              </Col>
            </Row>
          </section>
          <hr />
          <br />
          <section className="msg text-center">
            <form onSubmit={this.handleSubmit}>
              <Row>
                <Col sm="6">
                  <input
                    type="text"
                    name="name"
                    id="reviewer-name"
                    placeholder="Your Name"
                    required onChange={(e)=>this.onChange(e)}
                  />
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="reviewer-email"
                    placeholder="Your email"
                    required onChange={(e)=>this.onChange(e)}
                  />
                </Col>
                <Col>
                  <textarea
                    name="message"
                    id="reviewer-message"
                    rows="4"
                    placeholder="Your Message" onChange={(e)=>this.onChange(e)}
                  />
                  <Button outline color="light" className="float-left">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </form>
          </section>
        </Container>
      </div>
    );
  }
}

export default Contact;
