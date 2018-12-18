import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from  './LanguageSelector';

class App extends React.Component {
  state = {
    language: 'english ',
    color: 'blue'
  };


  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}
//<LanguageContext.Provider> creates
//new pipe of information each time it is called

export default App;
