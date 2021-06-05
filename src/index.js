import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/react-comp/Clock/clock'
import '../src/assets/css/style.css'
import '../src/assets/css/mobile.css'

var body = document.body.getBoundingClientRect()
var width = body.width

if (width > 500) {
    document.getElementById('portrait').style.display = 'none'
    document.getElementById('root').style.display = 'block'
} else {
    document.getElementById('portrait').style.display = 'flex'
    document.getElementById('root').style.display = 'none'
}
ReactDOM.render( < Clock / > ,
    document.getElementById('root')
);

document.body.onresize = function() {
    body = document.body.getBoundingClientRect()
    width = body.width
    console.log(width)
    if (width > 500) {
        document.getElementById('portrait').style.display = 'none'
        document.getElementById('root').style.display = 'block'
    } else {
        document.getElementById('portrait').style.display = 'flex'
        document.getElementById('root').style.display = 'none'
    }
}