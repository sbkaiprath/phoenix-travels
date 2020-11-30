import React from 'react';
import "../assets/css/Loginform.css"

const RegisterForm=(props)=>{

    return(
        <div class="container">
	<section id="content">
		<form action="">
			<h1>Register Form</h1>
			<div>
				<input type="text" placeholder="Username" required="" id="username" />
			</div>
            <div>
				<input type="text" placeholder="Name" required="" id="name" />
			</div>
			<div>
				<input type="password" placeholder="Password" required="" id="password" />
			</div>
            <div>
				<input type="password" placeholder="Confirm Password" required="" id="confirm-password" />
			</div>
			<div>
				<input type="submit" value="Register" />
				<a href="/">Login</a>
			</div>
		</form>
	</section>
</div>
    );
}

export default RegisterForm;