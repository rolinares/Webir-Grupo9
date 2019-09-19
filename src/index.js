import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
// import LineChart from './components/LineChart';

const container = document.getElementById('root');

// ReactDOM.render(<div><Header/><LineChart/></div>, container);
ReactDOM.render(<div><Header/><SearchPanel/></div>, container);
