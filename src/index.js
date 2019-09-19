import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import LineChart from './components/LineChart';

const container = document.getElementById('root');

ReactDOM.render(<div><Header></Header><LineChart></LineChart></div>, container);
