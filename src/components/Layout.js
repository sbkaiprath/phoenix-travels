import React from "react";
import NavbarMain from "./Navbar";
import Home from "../pages/Home";
import Modal from './UI/Modal';
import Cardcomponent from './Cardcomponent'
import {Redirect} from 'react-router-dom'


class Layout extends React.Component{

    state={
        show: false,
        redirect:false
    }
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
          return <Redirect to='/login' />
        }}
    render(){
        
        return(
            <div>
            <Modal show={this.state.show} clicked={this.clicked}>
            {this.renderRedirect()}
              <Cardcomponent clicked={this.clicked} continue={this.setRedirect}/>
            </Modal>
            <NavbarMain clicked={this.clicked} home={this.setRedirect}/>
            <Home/>
            </div>
        )
    }

}

export default Layout;