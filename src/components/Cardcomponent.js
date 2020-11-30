import React  from 'react'
import Button from './UI/Button';
import classes from '../assets/css/Card.module.css'


const Cardcomponent=(props)=>{
    return(
        <div className={classes}>
<h1>LogOut</h1>
<h3> Do you want to Logout?</h3>
<Button clicked={props.clicked} btnType='Danger'>CANCEL</Button>
<Button clicked={props.continue} btnType='Success'>CONTINUE</Button>
        </div>
    );
}

export default Cardcomponent;