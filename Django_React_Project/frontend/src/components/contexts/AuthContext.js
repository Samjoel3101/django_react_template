import React , {createContext, useContext, useEffect, useState} from 'react'
import {djangoFetch} from '../djangoUtils/djangoFetch' 
import {cookie} from '../Cookie' 

const AuthContext = createContext()

export  function AuthProvider ({children}) {
    const [user, setUser] = useState(null) 
    const [validUser, setValidUser] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false) 

    useEffect(async ()=> {
        console.log(validUser)
        if (!validUser){
        var token = localStorage.getItem('key')
        var userDetailEndpoint = '/api/accounts/user-detail/'
        if (token){
            const checkEndpoint = '/api/accounts/check-user/'
            const data = {'token': token}

            var result = await djangoFetch({urlEndpoint:checkEndpoint, urlMethod: 'POST', sendData:data, 
                response_function: (response, status_code) => {
                    if (status_code === 200 && response.valid_user === 'true'){
                        console.log('response', status_code)
                        return true
                    }
                }})
            setValidUser(result)}
            console.log('userdata', validUser)
            // setUser(user_data)
            // setLoading(false) 
            // setIsLoggedIn(true) 
        }
        
    }, [validUser, user])
    return (
        <AuthContext.Provider value = {user}>
            {children}
        </AuthContext.Provider>
    )
}

export function authContext(){
    return useContext(AuthContext)
}
