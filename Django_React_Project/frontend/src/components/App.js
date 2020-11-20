import React, { Component } from 'react';
import {render} from 'react-dom'; 
import HomePage from './Home/HomePage';

export default class App extends Component {
    render() {
        return (
            <div>
                <HomePage />
            </div>
        )
    }
}

const AppComp = document.getElementById('app');
render(<App/>, AppComp);

 

