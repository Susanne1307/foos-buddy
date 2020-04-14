import React from 'react';
import StartAnimation from '../components/StartAnimation';

let timeOut;

function Start() {
  clearTimeout(timeOut);
  timeOut = setTimeout(function () {
    window.location = '/login';
  }, 4500);
  return <StartAnimation />;
}

export default Start;
