import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'  
import {useGoogleLogout} from 'react-google-login' 

import {djangoFetch} from '../djangoUtils/djangoFetch' 
import {authContext} from '../contexts/AuthContext'
import {logout} from '../utils/authUtils'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID 

export default function UserLogout() {
    const logoutEndpoint = '/api/accounts/logout/'

    const [isLoggedIn, setIsLoggedIn] = authContext()
    const history = useHistory()  

    const {signOut, loaded} = useGoogleLogout(
		{clientId: GOOGLE_CLIENT_ID,
		onLogoutSuccess: (resp) => {console.log('logged out', resp)}, 
		onLogoutFailure: resp => {console.log('logout failure', resp)}
		}
	) 

    useEffect(() =>{
        if (loaded){
            const auth = window.gapi.auth2.getAuthInstance() 
            auth.signOut().then(() => {
                auth.disconnect()
            })

            djangoFetch({urlEndpoint: logoutEndpoint, urlMethod: 'POST', sendData: null, 
                response_function: (response, status_code)=> {
                    if (status_code === 200){
                        alert('Logged out sucessfully')
                        logout({setAuthFunc: setIsLoggedIn})
                        history.push('/') 
                    }
                    else{
                        alert("Logout Failure. Please try again")
                        console.log(response)
                    }
                }})
        }
    }, [loaded])
 

    
    return (
       null
    )
}
