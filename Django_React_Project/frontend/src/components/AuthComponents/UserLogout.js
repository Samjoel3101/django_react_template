import React from 'react'
import {djangoFetch} from '../djangoUtils/djangoFetch' 
import {authContext} from '../contexts/AuthContext'
import {useHistory} from 'react-router-dom' 

export default function UserLogout() {
    const logoutEndpoint = '/api/accounts/logout/'
    const [isLoggedIn, setIsLoggedIn] = authContext()
    const history = useHistory() 

    djangoFetch({urlEndpoint: logoutEndpoint, urlMethod: 'POST', sendData: null, 
        response_function: (response, status_code)=> {
            if (status_code === 200){
                alert('Logged out sucessfully')
                history.push('/') 
                localStorage.setItem('key', 'null')
                localStorage.setItem('loggedIn', 'false')
                setIsLoggedIn(false)                
            }
            else{
                console.log(response)
            }
        }})
    return (
       null 
    )
}
