import React, { Component } from 'react';
import {render} from 'react-dom'; 

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

const AppComp = document.getElementById('app');
render(<App/>, AppComp);

 

