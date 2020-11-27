import React, {Component} from 'react'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import UrlComponents from './UrlIndex'; 
import NavBar from '../NavBar'; 

function RouteUrl(UrlArray){
    const route_elements = [];
    for (var key in UrlArray){
        route_elements.push(<Route exact path = {key} component = {UrlArray[key]}/>);
    };
    return route_elements; 
}

const UrlRouter = () => {

        return (
            <div>
                <Router>
                    <NavBar/>
                        <Switch>
                        {RouteUrl(UrlComponents)}
                        </Switch>
                </Router>

            </div>
        )
    

}

export default UrlRouter;