import React from 'react';
import {Link} from 'react-router-dom';
//import ReactDom from 'react-dom';

class App extends React.Component{

    constructor(props){
        //Wy we cant use this before super(props) -- understood
        super(props);
        this.state={time:new Date()}
    }

    componentDidMount(){
        this.timer = setInterval(()=>this.setState({time:new Date()}),1000);
    }

    componentDidUpdate(prevState){
        if(this.state.time!==prevState.time){
            console.log('Current state is not equal to prev state')
        }
        else{
            console.log('Current state is equal to prev state')
        }
    }

    componentWillUnmount(){
        console.log('ComponentWillUnmount is called')
        clearInterval(this.timer);
    }

    render(){
        return (
        <div>
            <h1>The date time is {this.state.time.toLocaleTimeString()}</h1>
            <br/>
            
            <Link to="/">Go To The Home Page!!</Link>
        </div>
        )
    }
}

export default App;