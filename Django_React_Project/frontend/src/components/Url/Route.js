import React, {Component} from 'react'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

import UrlComponents from './UrlIndex'; 
import NavBar from '../NavBar.js'; 
import {NavContextProvider} from '../contexts/NavContext' 

function RouteUrl(UrlArray){
    const route_elements = [];
    var id = 1
    for (var key in UrlArray){
        route_elements.push(<Route key = {id} exact path = {key} component = {UrlArray[key]}/>);
        id += 1 
    };
    return route_elements; 
}

const UrlRouter = () => {

        return (
            <div>
                <Router>
                    <NavContextProvider>
                        <NavBar/>
                        <Switch>
                        {RouteUrl(UrlComponents)}
                        </Switch>
                    </NavContextProvider>
                </Router>

            </div>
        )
    

}

export default UrlRouter;