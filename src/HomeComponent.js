import React from 'react';
import {Link} from 'react-router-dom';
class Home extends React.Component{

render(){
    return (
        <div>
            <h1>Welcome to the Home page of our Application!!!</h1>
            <br/>
            <Link to="/App">Go To App to see the live Date</Link>
        </div>
    )
}

}

export default Home;