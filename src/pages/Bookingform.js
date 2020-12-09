import React from 'react';
import { Form, FormGroup, Label, Input,Jumbotron ,Container,Button} from 'reactstrap';
import axios from 'axios';

class Bookingform extends React.Component{
constructor(props) {
		super(props)
		this.state = {
		  address:"",
		  zipcode:"",
		  city:"",
		  state:"",
		  Mobile:"",
		  checkin:"",
		  checkout:"",
		  room:"",
		  checkintime:"",
		  checkouttime:"",
		  id:"",
		  roomtype:"",
		  config :{
			headers: { Authorization: `Bearers ${document.cookie}` }
		
		  }
	}
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	onChange(e) {
	this.setState({[e.target.name]: e.target.value})
	} 
	
	
	handleSubmit= (event,item)=>{
	
	event.preventDefault();
	
	const book={
		address:this.state.address,
		zipCode:this.state.zipcode,
		city:this.state.city,
		state:this.state.state,
		phone:this.state.Mobile,
		checkIndate:this.state.checkin,
		checkOutdate:this.state.checkout,
		numberRooms:parseInt(this.state.room),
		checkIntime:this.state.checkintime.toString(),
		checkOutime:this.state.checkouttime.toString(),
		roomType:this.state.roomtype.toString(),
		imageId:this.props.location.state.id,
		
	}
	console.log(this.props.location.state.id)
	axios.post('http://localhost:5000/api/booking/',book,this.state.config)
			.then((res) => {
		console.log(res.data);
		alert("You have Successfully Booked")
		this.setState({});
			}).catch((error) => {
				alert("Please select all the fields to book");
			});}
	render(){
		const item=this.props.location.state;
		//console.log(item)
		return (
			<div style={{textAlign:"center",padding:"50px 400px",background:"green"}}>
			<Jumbotron fluid >
				<Container fluid>
				  <h1 className="display-3">{item.packageName}</h1>
				  <p className="lead">Complete the form to book for {item.packageName}</p>
				  <h3>Rs {item.price}</h3>
				</Container>
			  </Jumbotron>
				<Form style={{color:"white"}} onSubmit={this.handleSubmit}>
			  <FormGroup>
				<Label for="exampleEmail">Address</Label>
				<Input
				  type="text"
				  name="address"
				  id="exampleEmail"
				  placeholder="Address"
				  onChange={(e)=>this.onChange(e)}
				/>
			  </FormGroup>
			  <FormGroup>
				<Label for="examplePassword">ZipCode</Label>
				<Input
				  type="number"
				  name="zipcode"
				  id="examplePassword"
				  placeholder="ZipCode"
				  onChange={(e)=>this.onChange(e)}
				/>
			  </FormGroup>
			  <FormGroup>
				<Label for="city">City</Label>
				<Input
				  type="text"
				  name="city"
				  id="city"
				  placeholder="url placeholder"
				  onChange={(e)=>this.onChange(e)}
				/>
			  </FormGroup>
			  <FormGroup>
				<Label for="state">State</Label>
				<Input
				  type="text"
				  name="state"
				  id="state"
				  placeholder="State"
				  onChange={(e)=>this.onChange(e)}
				/>
			  </FormGroup>
			  <FormGroup>
				<Label for="Mobile">Mobile Number</Label>
				<Input
				  type="number"
				  name="Mobile"
				  id="Mobile"
				  placeholder="Mobile Number"
				  onChange={(e)=>this.onChange(e)}
				/>
			  </FormGroup>
			  <FormGroup>
				<Label for="checkin">Check In</Label>
				<Input
				  type="date"
				  name="checkin"
				  id="checkin"
				  placeholder="Check In Date"
				  onChange={(e)=>this.onChange(e)}
				/>
			  </FormGroup>
			  <FormGroup>
				<Label for="checkout">Check Out</Label>
				<Input
				  type="date"
				  name="checkout"
				  id="checkout"
				  placeholder="Check Out Date"
				  onChange={(e)=>this.onChange(e)}
				/>
			  </FormGroup>
			  <FormGroup>
				<Label for="room">Number of Rooms</Label>
				<Input
				  type="number"
				  name="room"
				  id="room"
				  placeholder="Number of Rooms"
				  onChange={(e)=>this.onChange(e)}
				/>
			  </FormGroup>
			  <FormGroup>
				<Label for="checkintime">Check In Time</Label>
				<Input type="select" name="checkintime" id="checkintime" onChange={(e)=>this.onChange(e)}>
				<option>Select</option>
				  <option>Morning</option>
				  <option>Afternoon</option>
				  <option>Evening</option>
				</Input>
			  </FormGroup>
			  <FormGroup>
				<Label for="checkouttime">Check Out Time</Label>
				<Input type="select" name="checkouttime" id="checkouttime"   onChange={(e)=>this.onChange(e)}>
				<option>Select</option>
				  <option>Morning</option>
				  <option>Afternoon</option>
				  <option>Evening</option>
				</Input>
			  </FormGroup>
			  <FormGroup>
				<Label for="roomtype">Room Type</Label>
				<Input type="select" name="roomtype" id="roomtype" onChange={(e)=>this.onChange(e)}>
				  <option>Deluxe</option>
				  <option>Standard</option>
				  <option>Suite</option>
				</Input>
			  </FormGroup>
			  <Button type="submit" size="lg" outline color="info">Submit</Button>{' '}
			</Form>
			
			</div>
		  );
	}
}

export default Bookingform;
