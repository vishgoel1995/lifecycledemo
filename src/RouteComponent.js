import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import App from './AppComponent';
import Home from './HomeComponent';
class RouteCom extends React.Component {

    render(){
        return (
            
            <div>
                <BrowserRouter>
                <Route path="/" exact component={Home}></Route>
                <Route path ="/App"  component={App}></Route>
                
                </BrowserRouter>

            </div>
        )
    }

}

export default RouteCom;