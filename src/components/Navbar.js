import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";
import "../App.css";

class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="faded"
          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
          <Container>
            <NavbarBrand href="#">Welcome Sooraj</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#packageBody">Package</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#servicesBody">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contactBody">Contact</NavLink>
                </NavItem>
                <Button color="primary" onClick={this.props.clicked}>My Bookings</Button>
                &nbsp; &nbsp; 
                <Button color="success" onClick={this.props.clicked}>Logout</Button>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;
