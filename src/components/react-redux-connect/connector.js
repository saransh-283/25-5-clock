import storeRedux from '../redux-init/reducer'
import * as Redux from 'redux'
// import connection
import {
    connect
} from 'react-redux'
// import components
import Counter from '../react-comp/Counter/counter'
import buttons from '../react-comp/Buttons/buttons'

const store = Redux.createStore(storeRedux.reducer)

var interval

const mapStateToProps = function(state) {
    return {
        minutes: state.minutes,
        seconds: state.seconds,
        brkRch: state.brkRch,
        brk: state.brk
    }
}

var state = store.getState()

const mapDispatchToProps = function(dispatch) {
    return {
        start: function() {
            interval = setInterval(function() {

                dispatch(storeRedux.startFunc(store))
            }, 200)
        },
        pause: function() {
            dispatch(storeRedux.pauseFunc(interval))
        },
        reset: function() {
            dispatch(storeRedux.resetFunc(interval))
        },
        decMin: function() {
            dispatch(storeRedux.minDecFunc())
        },
        incMin: function() {
            dispatch(storeRedux.minIncFunc())
        },
        decSec: function() {
            dispatch(storeRedux.secDecFunc())
        },
        incSec: function() {
            dispatch(storeRedux.secIncFunc())
        },
        decBrk: function() {
            dispatch(storeRedux.brkDecFunc())
        },
        incBrk: function() {
            dispatch(storeRedux.brkIncFunc())
        }
    }
}

//

const CounterConnected = connect(mapStateToProps, mapDispatchToProps)(Counter)
const SecIncBtnConnected = connect(mapStateToProps, mapDispatchToProps)(buttons.SecIncBtn)
const SecDecBtnConnected = connect(mapStateToProps, mapDispatchToProps)(buttons.SecDecBtn)
const MinIncBtnConnected = connect(mapStateToProps, mapDispatchToProps)(buttons.MinIncBtn)
const MinDecBtnConnected = connect(mapStateToProps, mapDispatchToProps)(buttons.MinDecBtn)
const BrkIncBtnConnected = connect(mapStateToProps, mapDispatchToProps)(buttons.BrkIncBtn)
const BrkDecBtnConnected = connect(mapStateToProps, mapDispatchToProps)(buttons.BrkDecBtn)
const StartBtnConnected = connect(mapStateToProps, mapDispatchToProps)(buttons.StartBtn)
const ResetBtnConnected = connect(mapStateToProps, mapDispatchToProps)(buttons.ResetBtn)
const PauseBtnConnected = connect(mapStateToProps, mapDispatchToProps)(buttons.PauseBtn)

export default {
    store,
    CounterConnected,
    SecIncBtnConnected,
    SecDecBtnConnected,
    MinIncBtnConnected,
    MinDecBtnConnected,
    BrkIncBtnConnected,
    BrkDecBtnConnected,
    StartBtnConnected,
    ResetBtnConnected,
    PauseBtnConnected
}