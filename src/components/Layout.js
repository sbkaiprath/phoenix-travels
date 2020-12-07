import React from "react";
import NavbarMain from "./Navbar";
import Home from "../pages/Home";
import Modal from './UI/Modal';
import Cardcomponent from './Cardcomponent'
import {Redirect} from 'react-router-dom'
import axios from 'axios'



class Layout extends React.Component{

    state={
        show: false,
        redirect:false,
     config :{
      headers: { Authorization: `Bearers ${document.cookie}` }
  
    }}
    
    clicked=()=>{
        this.setState((preState)=>({
            show:!preState.show
        }))
    }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }  
      
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }}
       

        handleLogout=()=>{
        console.log(this.state.config.headers.Authorization)
        axios.get("http://localhost:5000/api/user/logout",this.state.config).then(res=>{
          alert('Succesfully Logged Out')
          document.user=""
          document.cookie=""
         this.setRedirect()
        }).catch((err)=>{
          alert(err)
        })}
    render(){
    
        return(
            <div>
            <Modal show={this.state.show} clicked={this.clicked}>
            {this.renderRedirect()}
              <Cardcomponent clicked={this.clicked} continue={this.handleLogout}/>
            </Modal>
            <NavbarMain clicked={this.clicked} home={this.setRedirect} name={document.user.name} />
            <Home/>
            </div>
        )
    }

}

export default Layout;