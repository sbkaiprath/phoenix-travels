import React from "react";
import Bookingcard from "../components/Bookingcard";
import {Redirect} from 'react-router-dom';


class Mybooking extends React.Component{
state={
    redirect:false
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

render(){
    return(<div >
        <h1 style={{textAlign:"center"}}>My Bookings</h1>
         <Bookingcard/>
         <br/>
         <br/>
         <br/>
         <br/>
         <Bookingcard/>
         {this.renderRedirect()}
         <button onClick={this.setRedirect} >Go back Home</button>

    </div>)
    

    
}





}
export default Mybooking;