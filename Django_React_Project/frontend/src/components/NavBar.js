import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import GoogleLogin from './AuthComponents/GoogleLogin'; 

function NavBar() {
    return (
			<div>
				<Navbar bg = 'light'>
					<Navbar.Brand href = '/'>Django React Project</Navbar.Brand>
					<Nav.Link href = '/signup'>SignUp</Nav.Link>
					<Nav.Link href = '/login'>Login</Nav.Link>
					<GoogleLogin/>
				
				</Navbar> 
			</div>
    )
}

export default NavBar; 
