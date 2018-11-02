// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './assets/global.css';

const rootNode = document.querySelector('#root');

if (rootNode) {
  ReactDOM.render(<Root />, rootNode);
} else {
  throw new Error('Could not find root node');
}
