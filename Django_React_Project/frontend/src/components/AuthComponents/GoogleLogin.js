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
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this)

    }
    login(response){
        console.log(response);
        this.setState(state => ({
            isLoggedIn:true, 
            accesstoken: response.accesstoken 
        }))
    }
    logout(response){
        console.log(response); 
        this.setState(state => ({
            isLoggedIn:false, 
            accesstoken: ''
        }))
    }

    handleLoginFailure(response){
        console.log(response); 
        alert('Error login')
    }
    handleLogoutFailure(response){
        console.log(response);
        alert('Error logout')
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
