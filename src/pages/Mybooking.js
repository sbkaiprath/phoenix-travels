import React from "react";
import Bookingcard from "../components/Bookingcard";
import {Redirect} from 'react-router-dom';
import axios from 'axios';


class Mybooking extends React.Component{
state={
    redirect:false,
    config :{
      headers: { Authorization: `Bearers ${document.cookie}` }
  
    }
}
    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }  
      
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/home' />
        }}

componentDidMount(){
  axios.get('http://localhost:5000/api/booking',this.state.config).then(res=>{
    console.log(res.data)
  }).catch(err=>{
    console.log(err)
  })
}

render(){
    return(<div >
        <h1 style={{textAlign:"center"}}>My Bookings</h1>
         <Bookingcard/>
         <Bookingcard/>
         {this.renderRedirect()}
         <button onClick={this.setRedirect}  style={{color:"white",border: "2px solid black",borderRadius:"10px",backgroundColor:"black",padding:"10px",marginLeft:"45%",marginTop:"20px"}}>Go back Home</button>

    </div>)
    

    
}





}
export default Mybooking;