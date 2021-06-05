import React from 'react';
import {Provider} from 'react-redux'
import connected from '../../react-redux-connect/connector'

class Clock extends React.Component{
    render(){
        return <Provider store={connected.store}>
            <connected.MinDecBtnConnected />
            <connected.CounterConnected name="minutes"/>
            <connected.MinIncBtnConnected />

            <connected.SecDecBtnConnected />
            <connected.CounterConnected name="seconds"/>
            <connected.SecIncBtnConnected />

            <connected.BrkDecBtnConnected />
            <connected.CounterConnected name="brk"/>
            <connected.BrkIncBtnConnected />

            <connected.StartBtnConnected />
            <connected.ResetBtnConnected />
            <connected.PauseBtnConnected />
        </Provider>
    }
}

export default Clock