import React,  {createContext, useContext, useState, useEffect} from 'react'
import {Nav} from 'react-bootstrap' 

import {authContext} from '../contexts/AuthContext'
import GoogleLogin from '../AuthComponents/GoogleLogin'

const NavContext = createContext() 

export function NavContextProvider({children}){
    const [navComponents, setNavComponents] = useState([]) 
    const [loading, setLoading] = useState(true) 
    
    const [isLoggedIn, setIsLoggedIn] = authContext()
    var components = null
 
useEffect(()=> {
        console.log('rep')
        if (navComponents.length === 0){
            if (isLoggedIn){
                components = [<Nav.Link key = 'logout' data-key = 'logout' href = '/logout'>Logout</Nav.Link>]
            }else{
                components =  [
                    <Nav.Link key = 'signup' data-key = 'signup' href = '/signup'>SignUp</Nav.Link>,
                    <Nav.Link key = 'login' data-key = 'login' href = '/login'>Login</Nav.Link>,
                    <GoogleLogin key = 'google-login' data-key = 'google-login' />
                ]
            }
            setNavComponents(oldComponents => [...oldComponents, components.flat()])
            setLoading(false)
        }

    }, [isLoggedIn, navComponents])

    if (!loading){
    return (
        <NavContext.Provider value = {[navComponents, setNavComponents]}>
            {children}
        </NavContext.Provider>
    )}else{
        return null 
    }
}
export function useNavContext() {
    return useContext(NavContext) 
}
