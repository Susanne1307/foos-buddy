import React from 'react';
import { useHistory } from 'react-router-dom';
import StartAnimation from '../components/StartAnimation';

let timeOut;

function Start() {
  const history = useHistory();
  clearTimeout(timeOut);
  timeOut = setTimeout(function () {
    history.push(`/login`);
  }, 4500);
  return <StartAnimation />;
}

export default Start;
