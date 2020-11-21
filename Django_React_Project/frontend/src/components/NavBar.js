import React from 'react'
import {Link} from 'react-router-dom'; 
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
