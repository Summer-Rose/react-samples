//Import the React & ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//FUNCTION BASED component
//Create a React component
const App = () => {
  return <div>Hi there!</div>;
};
//Take the react compopent and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
