import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
 
import {useNavContext} from './contexts/NavContext'; 

function NavBar() {
	const [navComponents, setNavComponents] = useNavContext()

    return (
			<div>
				<Navbar bg = 'light'>
					<Navbar.Brand href = '/'>Django React Project</Navbar.Brand>
					<div style = {{display: 'flex'}}>
						{navComponents}
					</div>				
				</Navbar> 
			</div>
    )
}

export default NavBar; 