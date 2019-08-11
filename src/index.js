import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
const name = "audy";
function getName() {
  return "Hallo my name is " + name
}
const element = <h1>{getName(name)}</h1>
ReactDOM.render(element,document.getElementById('master'));