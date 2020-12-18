import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import GoogleLogin from './AuthComponents/GoogleLogin'; 
import {authContext} from './contexts/AuthContext'; 

function NavBar() {
	const [isLoggedIn, setIsLoggedIn] = authContext()
	var components = null 
	if (isLoggedIn){
		components = (<Nav.Link href = '/logout'>Logout</Nav.Link>)
	}else{
		components =  (
		<div style = {{'display':'flex'}}>
			<Nav.Link href = '/signup'>SignUp</Nav.Link>
			<Nav.Link href = '/login'>Login</Nav.Link>
			<GoogleLogin/>
		</div>
		)
	}
    return (
			<div>
				<Navbar bg = 'light'>
					<Navbar.Brand href = '/'>Django React Project</Navbar.Brand>
					{components}				
				</Navbar> 
			</div>
    )
}

export default NavBar; 