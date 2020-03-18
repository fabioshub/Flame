/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the styles here to process them with webpack
import '@public/style.css';
import TitleBar from './components/TitleBar';
import Lines from './components/Lines';
import Sidebar from './components/Sidebar';
import Basic from './components/Basic';
// import TitleBar from './titleBar';

ReactDOM.render(
  <>
    <TitleBar />
    <Sidebar />
    <Basic />
  </>,
  document.getElementById('app')
);
