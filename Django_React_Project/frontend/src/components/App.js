import React, { Component, useState, useEffect } from 'react';
import {render} from 'react-dom'; 
import UrlRouter from './Url/Route';
import UserContext from './UserContext'; 

export default function App () {
    // const [user, setUser] = useState(null); 
    
    // useEffect(() => {
    //     var token = localStorage.getItem('key')
    //     if (token !== null){
    //     var verificationEndpoint = '/api/accounts/check-user/'
            
    //         fetch()
        
    //     }

    // })

    return (
        <UserContext.Provider >
            <div className = 'container'>             
                <UrlRouter />
            </div>
        </UserContext.Provider>
    )
}

const AppComp = document.getElementById('app');
render(<App/>, AppComp);

 

