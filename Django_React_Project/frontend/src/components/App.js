import React, { Component } from 'react';
import {render} from 'react-dom'; 
import UrlRouter from './Url/Route';

export default class App extends Component {
    render() {
        return (
            <div className = 'container'>             
                <UrlRouter />
            </div>
        )
    }
}

const AppComp = document.getElementById('app');
render(<App/>, AppComp);

 

