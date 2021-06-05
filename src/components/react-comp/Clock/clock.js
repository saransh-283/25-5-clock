import React from 'react';
import { Provider } from 'react-redux'
import connected from '../../react-redux-connect/connector'
import '../Clock/clock.css'

class Clock extends React.Component {
    render() {
        return <Provider store={connected.store}>
            <header>timer</header>
            <p id="sub-head">25+5</p>
            <div id="clock">
                <div className="counters">
                    <connected.MinDecBtnConnected />
                    <connected.CounterConnected name="minutes" />
                    <connected.MinIncBtnConnected />
                </div>
                <div className="counters">
                    <connected.SecDecBtnConnected />
                    <connected.CounterConnected name="seconds" />
                    <connected.SecIncBtnConnected />
                </div>
                <div className="counters" id="break">
                    <connected.BrkDecBtnConnected />
                    <connected.CounterConnected name="brk" />
                    <connected.BrkIncBtnConnected />
                </div>
            </div>
            <div id="controls">
                <div>
                    <connected.StartBtnConnected />
                    <connected.ResetBtnConnected />
                    <connected.PauseBtnConnected />
                </div>
            </div>
        </Provider>
    }
}

export default Clock