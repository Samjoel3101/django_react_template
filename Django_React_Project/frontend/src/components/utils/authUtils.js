import React from 'react';

export function login({key, setAuthFunc}){
    localStorage.setItem('key', key) 
    localStorage.setItem('loggedIn', 'true')
    
    setAuthFunc(true)
}

export function logout({setAuthFunc}){

    localStorage.setItem('key', 'null')
    localStorage.setItem('loggedIn', 'false')

    setAuthFunc(false) 
}