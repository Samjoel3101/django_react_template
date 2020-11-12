import React, { Component } from 'react'
import fetch from 'whatwg-fetch' 
import cookie from  'react-cookies' 

function backendLogin(credentials){
	const method = 'POST'
	const lookupOptions = {
		
	}
	return None 
}

class UserLogin extends Component {
		constructor(props){
			super(props)
			this.state = {
				username: '',
				password: ''
			}
			this.inputChange = this.inputChange.bind(this)
		}

		inputChange(event){
			event.preventDefault();
			this.setState(
				{[event.target.name]: event.target.value})
		}

    render() {
			return (
				<div>
					<form>
						<label> 
							<p>Username</p>
							<input type = 'text' placeholder = 'Username' name = 'username' 
									value = {this.state.username}
									onChange = {this.inputChange} />
						</label>
						<label>
							<p>Password</p>
							<input type = 'password' 
									placeholder = 'password' 
									name = 'password'
									onChange = {this.inputChange} />
						</label>
						
					</form>
				</div>
			)
    }
}

export default UserLogin;
