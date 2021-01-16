import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function ForgotPW() {
	return (

		<section class="login_box_area section_gap">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="login_box_img">
						<img class="img-fluid" src="img/login.jpg" alt=""/>
						<div class="hover">
							<h4>New to our website?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<Link class="primary-btn" >Create an Account</Link>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="login_form_inner">
						<h3>Forgot Password</h3>
						<form class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
							<div class="col-md-12 form-group">
								<input type="emmail" class="form-control" id="emails" name="emails" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'"/>
							</div>
							
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn">Send Email</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	);
}

export default ForgotPW;
