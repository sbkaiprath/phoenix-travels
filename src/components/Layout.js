import React from "react";
import NavbarMain from "./Navbar";
import Home from "../pages/Home";
import Modal from './UI/Modal';

class Layout extends React.Component{

    state={
        show: false
    }
    cclicked=()=>{
        this.setState((preState)=>({
            show:!preState.show
        }))
    }
    render(){
        
        return(
            <div>
            <Modal show={this.state.show} clicked={this.clicked}>

            </Modal>
            <NavbarMain/>
            <Home/>
            </div>
        )
    }

}

export default Layout;