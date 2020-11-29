import React, { Component, useState, useEffect } from 'react';
import {render} from 'react-dom'; 
import UrlRouter from './Url/Route';
import {AuthProvider} from './contexts/AuthContext';

export default function App () {

    return (
        <AuthProvider >
            <div className = 'container'>             
                <UrlRouter />
            </div>
        </ AuthProvider>
    )
}

const AppComp = document.getElementById('app');
render(<App/>, AppComp);

 

