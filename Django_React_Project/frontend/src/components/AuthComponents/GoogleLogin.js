import React from 'react';
import {GoogleLogin as GLogin} from 'react-google-login';
import {useHistory} from 'react-router-dom';

import {login} from '../utils/authUtils';
import {authContext} from '../contexts/AuthContext';
import {djangoFetch} from '../djangoUtils/djangoFetch';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

export default function GoogleLogin () {
    const [isLoggedIn, setIsLoggedIn] = authContext() 
    const history = useHistory() 

    const googleLoginEndpoint = '/api/accounts/google-login/' 
    const googleLogin = (response) => {
        if (response.accessToken){
            djangoFetch({urlEndpoint: googleLoginEndpoint, urlMethod: 'POST',
            sendData: {'access_token': response.accessToken}, 
            response_function: (response, status_code) => {
                if (status_code === 200){
                    login({key: response.key, setAuthFunc: setIsLoggedIn})
                    history.push('/')
                }else{
                    console.log('error')
                    console.log(response)
                }
        }})
        }else{
            console.log('no access code')
            console.log(response)
        }
    }

    const loginFailure = (response) => {
        alert('Couldnt Log in pls try again')
        console.log(response)
    }


    if (!isLoggedIn){
          return (  <GLogin 
                clientId={ GOOGLE_CLIENT_ID }
                buttonText='Login'
                onSuccess={ googleLogin }
                onFailure={ loginFailure }
                cookiePolicy={ 'single_host_origin' }
                responseType='code, token'
            />) 
    }else {
            return null 
        }
}


