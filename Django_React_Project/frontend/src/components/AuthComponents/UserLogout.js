import React from 'react'
import {useHistory} from 'react-router-dom'  
import {useGoogleLogout} from 'react-google-login' 

import {djangoFetch} from '../djangoUtils/djangoFetch' 
import {authContext} from '../contexts/AuthContext'
import {logout} from '../utils/authUtils'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID 

export default function UserLogout() {
    const logoutEndpoint = '/api/accounts/logout/'

    // const {signOut, loaded} = useGoogleLogout(
    //     {clientId: GOOGLE_CLIENT_ID,
    //     onLogoutSuccess: (resp) => {console.log(resp)}, 
    //     onLogoutFailure: resp => {console.log(resp)}
    //     }
    // ) 

    const [isLoggedIn, setIsLoggedIn] = authContext()
    const history = useHistory()    

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
    return (
       null
    )
}
