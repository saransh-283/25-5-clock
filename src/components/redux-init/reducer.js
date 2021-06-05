const defaultState = {
    minutes: 25,
    seconds: 0,
    brk: 5,
    brkRch: 20
}

const MIN_INC = 'MIN_INC'
const MIN_DEC = 'MIN_DEC'
const SEC_INC = 'SEC_INC'
const SEC_DEC = 'SEC_DEC'
const BRK_INC = 'BRK_INC'
const BRK_DEC = 'BRK_DEC'
const START = 'START'
const PAUSE = 'PAUSE'
const RESET = 'RESET'

var seconds
var minutes
var brk
var colors
var audio = document.getElementById('audio')

const minIncFunc = () => {
    return {
        type: MIN_INC
    }
}

const minDecFunc = () => {
    return {
        type: MIN_DEC
    }
}

const secIncFunc = () => {
    return {
        type: SEC_INC
    }
}

const secDecFunc = () => {
    return {
        type: SEC_DEC
    }
}

const brkIncFunc = () => {
    return {
        type: BRK_INC
    }
}

const brkDecFunc = () => {
    return {
        type: BRK_DEC
    }
}

const startFunc = (store) => {
    return {
        type: START,
        store
    }
}

const pauseFunc = (countInt) => {
    return {
        type: PAUSE,
        countInt
    }
}

const resetFunc = (countInt) => {
    return {
        type: RESET,
        countInt
    }
}




const reducer = (state = defaultState, action) => {
    seconds = state.seconds
    minutes = state.minutes
    brk = state.brk
    switch (action.type) {
        case START:
            document.getElementById('minDec').disabled = true
            document.getElementById('minInc').disabled = true
            document.getElementById('secDec').disabled = true
            document.getElementById('secInc').disabled = true
            document.getElementById('brkDec').disabled = true
            document.getElementById('brkInc').disabled = true
            document.getElementById('pause').disabled = false
            document.getElementById('start').disabled = true

            if (minutes == state.brkRch && !seconds) {
                var bgInt = setInterval(() => {
                    colors = document.getElementById('minutes').style.color
                    console.log(colors)
                    if (colors == 'rgb(224, 75, 75)') {
                        colors = '#9fd4b8'
                    } else {
                        colors = 'rgb(224, 75, 75)'
                    }
                    document.getElementById('minutes').style.color = colors
                    document.getElementById('seconds').style.color = colors
                }, 400)
                setTimeout(() => {
                    document.getElementById('minutes').style.color = '#9fd4b8'
                    document.getElementById('seconds').style.color = '#9fd4b8'
                    colors = '#9fd4b8'
                    clearInterval(bgInt)
                }, 3200)
                return Object.assign({}, state, {
                    brkRch: minutes - brk
                })
            }

            if (!seconds) {
                seconds = 59
                minutes--
            } else {
                seconds--
            }
            return Object.assign({}, state, {
                seconds,
                minutes
            })
            break
        case PAUSE:
            clearInterval(action.countInt)
            document.getElementById('start').disabled = false
            document.getElementById('pause').disabled = true
            return state
            break
        case RESET:
            clearInterval(action.countInt)
            document.getElementById('minDec').disabled = false
            document.getElementById('minInc').disabled = false
            document.getElementById('secDec').disabled = false
            document.getElementById('secInc').disabled = false
            document.getElementById('brkDec').disabled = false
            document.getElementById('brkInc').disabled = false
            document.getElementById('pause').disabled = true
            document.getElementById('start').disabled = false
            return defaultState
            break
        case MIN_DEC:
            minutes = minutes ? minutes - 1 : minutes
            return Object.assign({}, state, {
                minutes
            })
            break
        case MIN_INC:
            minutes++
            return Object.assign({}, state, {
                minutes
            })
            break
        case SEC_DEC:
            seconds = seconds ? seconds - 1 : 60
            return Object.assign({}, state, {
                seconds
            })
            break
        case SEC_INC:
            seconds = seconds == 59 ? 0 : seconds + 1
            return Object.assign({}, state, {
                seconds
            })
            break
        case BRK_DEC:
            brk = brk - 1 ? brk - 1 : brk
            return Object.assign({}, state, {
                brk,
                brkRch: minutes - brk
            })
            break
        case BRK_INC:
            brk++
            return Object.assign({}, state, {
                brk,
                brkRch: minutes - brk
            })
            break
        default:
            return state
    }

}

export default {
    reducer,
    minDecFunc,
    startFunc,
    pauseFunc,
    resetFunc,
    minIncFunc,
    secIncFunc,
    secDecFunc,
    brkIncFunc,
    brkDecFunc
}