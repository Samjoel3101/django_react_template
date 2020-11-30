import React , {createContext, useContext, useEffect, useState} from 'react'
import {djangoFetch} from '../djangoUtils/djangoFetch' 
import {cookie} from '../Cookie' 

const AuthContext = createContext()

export  function AuthProvider ({children}) {
    const loggedIn = localStorage.getItem('loggedIn') === 'false' ? false : true
    const [validUser, setValidUser] = useState(loggedIn)
    const [loading, setLoading] = useState(!loggedIn)
    const [isLoggedIn, setIsLoggedIn] = useState(loggedIn) 
    
    useEffect(async ()=> {
        if (!isLoggedIn){
        if (validUser){
            setLoading(false)
            setIsLoggedIn(true)
            localStorage.setItem('loggedIn', validUser)
            
        }
        if (!validUser){
        var key = localStorage.getItem('key')
        var token = key === 'null' || key === 'undefined' ? false : key
        console.log(token)
        if (!token){
            setLoading(false)
        }
        if (token){
            const checkEndpoint = '/api/accounts/check-user/'
            const data = {'token': token}

            var result = await djangoFetch({urlEndpoint:checkEndpoint, urlMethod: 'POST', sendData:data, 
                response_function: (response, status_code) => {
                    if (status_code === 200 && response.valid_user === 'true'){
                        return true
                    }
                }})            
            setValidUser(result)
            }

        }
    }
        
    }, [validUser])

    if (!loading){
    return (
        <AuthContext.Provider value = {[isLoggedIn, setIsLoggedIn]}>
            {children}
        </AuthContext.Provider>
    )}else{
        return null 
    }
}

export function authContext(){
    return useContext(AuthContext)
}
