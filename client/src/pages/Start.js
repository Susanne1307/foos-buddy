import React from 'react';
import StartAnimation from '../components/StartAnimation';

let timeOut;

function Start() {
  clearTimeout(timeOut);
  timeOut = setTimeout(function () {
    window.location = '/login';
  }, 5000);
  return <StartAnimation />;
}

export default Start;
