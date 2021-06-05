import React from 'react';
import '../Buttons/buttons.css'

class Button extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <button className={`${this.props.group} btn`} disabled={this.props.disabled} id={this.props.for} onClick={this.props.click}>{this.props.text}</button>
    }
}

class SecIncBtn extends React.Component{
    render(){
        return <Button group="incDec" for="secInc" click={this.props.incSec} text='&darr;'/>
    }
}

class SecDecBtn extends React.Component{
    render(){
        return <Button group="incDec" for="secDec" click={this.props.decSec} text='&uarr;' />
    }
}

class MinIncBtn extends React.Component{
    render(){
        return <Button group="incDec" for="minInc" click={this.props.incMin} text='&darr;' />
    }
}

class MinDecBtn extends React.Component{
    render(){
        return <Button group="incDec" for="minDec" click={this.props.decMin} text='&uarr;' />
    }
}

class BrkIncBtn extends React.Component{
    render(){
        return <Button group="incDec" for="brkInc" click={this.props.incBrk} text='&darr;' />
    }
}
// click={this.props.incMin}

class BrkDecBtn extends React.Component{
    render(){
        return <Button group="incDec" for="brkDec" click={this.props.decBrk} text='&uarr;' />
    }
}
// click={this.props.decMin}


class StartBtn extends React.Component{
    render(){
        return <Button group="control-btn" for="start" text={<i class="fa fa-play"></i>} click={this.props.start} />
    }
}

class ResetBtn extends React.Component{
    render(){
        return <Button group="control-btn" for="reset" text={<i class="fa fa-refresh"></i>} click={this.props.reset} />
    }
}

class PauseBtn extends React.Component{
    render(){
        return <Button group="control-btn"  for="pause" text={<i class="fa fa-pause"></i>} click={this.props.pause} />
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