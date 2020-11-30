import React, { Component } from 'react';
import "./Modal.css";
import Backdrop from './Backdrop'

class Modal extends Component {
    componentDidUpdate() {
        console.log('[Modal] is updated');
    }
    shouldComponentUpdate(nextprops, nextState) {
        return nextprops.show !== this.props.show || nextprops.children !== this.props.children;
    }
    render() {
        return (
           <div>
                <Backdrop show={this.props.show} clicked={this.props.clicked} />
                <div className="Modal" style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh',
                    opacity: this.props.show ? 1 : 0
                }}>
                    {this.props.children}
                </div>
                </div>)
    }
}
export default Modal;
