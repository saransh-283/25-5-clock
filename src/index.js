import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/react-comp/Clock/clock'

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

console.log(document.getElementById('pause').disabled)
document.getElementById('pause').disabled = true
console.log(document.getElementById('pause').disabled)