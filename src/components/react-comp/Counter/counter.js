import React from 'react';
import ReactDOM from 'react-dom';
import '../Counter/counter.css'

class Counter extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <div className="counter" id={this.props.name}>{this.props[this.props.name]}</div>
        </div>
    }
}

export default Counter