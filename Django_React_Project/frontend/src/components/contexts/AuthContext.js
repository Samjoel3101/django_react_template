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
            console.log('render')
        if (validUser){
            console.log(validUser)
            setLoading(false)
            setIsLoggedIn(true)
            localStorage.setItem('loggedIn', validUser)
            
        }
        if (!validUser){
            console.log('render')
        var token = localStorage.getItem('key')
        
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
            setValidUser(result)
            }

        }
    }
        
    }, [validUser])

    if (!loading){
    return (
        <AuthContext.Provider value = {[isLoggedIn]}>
            {children}
        </AuthContext.Provider>
    )}else{
        return null 
    }
}

export function authContext(){
    return useContext(AuthContext)
}
