// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './assets/global.css';

const root = document.createElement('div');
if (document.body) document.body.appendChild(root);
ReactDOM.render(<Root />, root);
