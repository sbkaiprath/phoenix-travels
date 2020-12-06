import React from 'react';
import "../assets/css/Loginform.css";
import axios from 'axios';


class Login extends React.Component{

	constructor(props) {
        super(props)
        this.state = {
	        email:"",
	        password:"",
		}
			this.handleSubmit = this.handleSubmit.bind(this);
    }
	
onChange(e) {
	this.setState({[e.target.name]: e.target.value})
} 
 

handleSubmit= (event)=>{

event.preventDefault();

const user={
	email:this.state.email,
	password:this.state.password,
}
axios.post('http://localhost:5000/api/user/login', user)
            .then((res) => {
				console.log(res.data);
				this.props.history.push({
					pathname:"/home",
					state:{data:res.data}
				})
            }).catch((error) => {
                alert("Invalid username or password");
            });}

	render(){
    return(
        <div className="login">
<div className="container">
	<section id="content">
		<form onSubmit={this.handleSubmit}>
			<h1>Phoenix Travels</h1>
            <h1>Login</h1>
			<div>
				<input type="text" placeholder="Username" required id="username" name="email" onChange={e=>this.onChange(e)}/>
			</div>
			<div>
				<input type="password" placeholder="Password" required id="password" name="password" onChange={e=>this.onChange(e)}/>
			</div>
			<div>
				<input type="submit" value="Log in" />
				<a href="/register" style={{textDecoration:"none",color:"green",fontSize:16}}>Register</a>
			</div>
		</form>
	</section>
</div>
        </div>
        
	);
	}
}

export default Login;