import React from 'react';
import './Login.css';

const Login = () => (
			<div>
				<div className="main">
					<div className="w3">
						<div class="signin-form profile">
							<h3>Login</h3>
							
							<div className="login-form">
								<form action="/" method="post">
									<input type="text" name="logemail" placeholder="E-mail" required="">
									<input type="password" name="logpassword" placeholder="Password" required="">
									<div className="tp">
										<input type="submit" value="LOGIN NOW">
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="agile">
						<div class="signin-form profile">
							<h3>Register</h3>
							
							<div class="login-form">
								<form action="/" method="post">
									<input type="text" name="email" placeholder="E-mail" required="">
									<input type="text" name="username" placeholder="Username" required="">
									<input type="password" name="password" placeholder="Password" required="">
									<input type="password" name="passwordConf" placeholder="Confirm Password" required="">
									<input type="submit" value="REGISTER">
								</form>
							</div>
							<p><a href="#"> By clicking register, I agree to your terms</a></p>
						</div>
					</div>
					<div class="clear"></div>
					
				</div>
				<div class="copyright">
					<p> &copy; 2016 Register Login Widget . All rights reserved | Design by <a href="http://w3layouts.com/" target="_blank" >W3layouts</a></p>
				</div>					
			</div>
);


export default Login;