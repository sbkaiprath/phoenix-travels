import React from 'react';
import "../assets/css/Loginform.css";
import axios from 'axios';
class Register extends React.Component{

	constructor(props) {
        super(props)
        this.state = {
            name:"",
	        email:"",
	        password:"",
			username:"",
			confirmpassword:"",
	        role:"customer"
		}
			this.handleSubmit = this.handleSubmit.bind(this);
    }
	
onChange(e) {
	this.setState({[e.target.name]: e.target.value})
} 
 

handleSubmit= (event)=>{

event.preventDefault();


const user={
	name:this.state.name,
	username:this.state.username,
	email:this.state.email,
	password:this.state.password,
	role:this.state.role
}
const confirm=this.state.confirmpassword;

if (user.password!==confirm) {
	alert("Passwords donot match");
	return;
  }
console.log(user)
/*try{
	const result =await Axios.post('/user/register',{user});
	//console.log(result.data);
}catch(err){
console.log(err)
}*/
axios.post('http://localhost:5000/api/user/register', user)
            .then((res) => {
                alert("You have Successfully registered !!")
            }).catch((error) => {
                console.log(error)
            });

}
render(){
    return(
        <div class="container">
	<section id="content">
		<form onSubmit={this.handleSubmit}>
			<h1>Register Form</h1>
			<div>
				<input type="text" placeholder="Email" required id="email" onChange={e=>this.onChange(e)} name="email"/>
			</div>
			<div>
				<input type="text" placeholder="Username" required id="username" name="username" onChange={e=>this.onChange(e)}/>
			</div>
            <div>
				<input type="text" placeholder="Name" required id="name" name="name" onChange={e=>this.onChange(e)}/>
			</div>
			<div>
				<input type="password" placeholder="Password" required id="password" name="password" onChange={e=>this.onChange(e)}/>
			</div>
            <div>
				<input type="password" placeholder="Confirm Password" required id="confirmpassword" name="confirmpassword" onChange={e=>this.onChange(e)}/>
			</div>
			<div>
				<input type="submit" value="Register" onSubmit={this.handleSubmit} />
				<a href="/" style={{textDecoration:"none",color:"green",fontSize:16}}>Login</a>
			</div>
		</form>
	</section>
</div>
    );}
}

export default Register;