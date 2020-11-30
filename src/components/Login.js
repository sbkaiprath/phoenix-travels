import React from 'react';
import "../assets/css/Loginform.css"


const LoginForm=(props)=>{

    return(
        <div className="login">
<div className="container">
	<section id="content">
		<form action="/home">
			<h1>Login Form</h1>
			<div>
				<input type="text" placeholder="Username" required="" id="username" />
			</div>
			<div>
				<input type="password" placeholder="Password" required="" id="password" />
			</div>
			<div>
				<input type="submit" value="Log in" />
				<a href="/register">Register</a>
			</div>
		</form>
	</section>
</div>
        </div>
        
    );
}

export default LoginForm;