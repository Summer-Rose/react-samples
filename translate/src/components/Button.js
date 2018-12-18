import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

//Consumer method:
class Button extends React.Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Dalej';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
        {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

//Why Consumer method vs. this.context?
//Use Consumer method when we want to get info out of
//multiple different context objects inside of a single component

//Consumer method:
// class Button extends React.Component {
//   render() {
//     return (
//       <button className="ui button primary">
//         <LanguageContext.Consumer>
//           {(value) => value === 'english' ? 'Submit' : 'Dalej'}
//         </LanguageContext.Consumer>
//       </button>
//     );
//   }
// }


//this.context method:
// class Button extends React.Component {
//   //conenct context object to class component
//   //must be called 'contextType'
//   static contextType = LanguageContext;
//   //Equivalent to Button.contextType = LanguageContext;
//
//   render() {
//     const text = this.context === 'english' ? 'Submit' : 'Dalej';
//     return (
//       <button className="ui button primary">{text}</button>
//     );
//   }
// }

//Alternative method:
//Button.contextType = LanguageContext;

export default Button;
