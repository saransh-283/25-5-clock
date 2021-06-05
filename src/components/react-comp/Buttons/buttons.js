import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <input disabled={this.props.disabled} id={this.props.for} type="button" onClick={this.props.click} value={this.props.text} />
    }
}

class SecIncBtn extends React.Component{
    render(){
        return <Button for="secInc" click={this.props.incSec} text='>'/>
    }
}

class SecDecBtn extends React.Component{
    render(){
        return <Button for="secDec" click={this.props.decSec} text='<' />
    }
}

class MinIncBtn extends React.Component{
    render(){
        return <Button for="minInc" click={this.props.incMin} text='>' />
    }
}

class MinDecBtn extends React.Component{
    render(){
        return <Button for="minDec" click={this.props.decMin} text='<' />
    }
}

class BrkIncBtn extends React.Component{
    render(){
        return <Button for="brkInc" click={this.props.incBrk} text='>' />
    }
}
// click={this.props.incMin}

class BrkDecBtn extends React.Component{
    render(){
        return <Button for="brkDec" click={this.props.decBrk} text='<' />
    }
}
// click={this.props.decMin}


class StartBtn extends React.Component{
    render(){
        return <Button for="start" text='Start' click={this.props.start} />
    }
}

class ResetBtn extends React.Component{
    render(){
        return <Button for="reset" text='Reset' click={this.props.reset} />
    }
}

class PauseBtn extends React.Component{
    render(){
        return <Button  for="pause" text="Pause" click={this.props.pause} />
    }
}

export default {
    SecIncBtn,
    SecDecBtn,
    MinIncBtn,
    MinDecBtn,
    BrkIncBtn,
    BrkDecBtn,
    StartBtn,
    ResetBtn,
    PauseBtn
}