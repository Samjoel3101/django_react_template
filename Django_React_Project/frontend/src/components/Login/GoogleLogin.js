import React, { Component } from 'react';
import {GoogleLogin as GLogin, GoogleLogout as GLogout} from 'react-google-login';

const CLIENT_ID = '654587183766-mridfokt701icdejej7n1bd4hdg044s3.apps.googleusercontent.com'

class GoogleLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false, 
            accesstoken :''
        }
        this.login = (response) => {
            if (response.accesstoken) {
                this.setState({
                    isLoggedIn: true, 
                    accesstoken: response.accesstoken 
                })
                console.log(response.accesstoken)
            }
        }

        this.logout = (response) => {
            this.setState({
                isLoggedIn: false, 
                accesstoken: ''
            })
        }

        this.handleLoginFailure = (response) => {
            alert ('Failed to login')
        }

        this.handleLogoutFailure = (response) => {
            alert ('Failed to logout')
        }
    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn ? 
                <GLogout  
                    clientId = {CLIENT_ID}
                    buttonText = 'Logout'
                    onLogoutSuccess = {this.logout}
                    onFailure = {this.handleLogoutFailure}/> : 
                <GLogin 
                    clientId={ CLIENT_ID }
                    buttonText='Login'
                    onSuccess={ this.login }
                    onFailure={ this.handleLoginFailure }
                    cookiePolicy={ 'single_host_origin' }
                    responseType='code,token'
                /> 

                }
            </div>
        )
    }
}

export default GoogleLogin;
