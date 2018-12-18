import React from 'react';

const Context = React.createContext('english');

//named export
export class LanguageStore extends React.Component {
  state = { langauge: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;



// export default React.createContext('english');
//can pass in any valid JS type, not just strings
