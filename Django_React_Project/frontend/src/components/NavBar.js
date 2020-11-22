import React from 'react';
import {Link} from 'react-router-dom'; 
import {NavBar} from 'react-bootstrap';
import GoogleLogin from './Login/GoogleLogin'; 

function NavBar() {
    return (
			<div>
				<nav className = 'navbar'>
					<ul>
						<li><Link to='/login'>Login</Link></li>
						<li><GoogleLogin/></li>
					</ul>
				</nav>
			</div>
    )
}

export default NavBar; 
