import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  //javascript language constructor method
  // constructor(props) {
  //   //require super
  //   //super - extends from React component base class which has constructor of its own
  //   //overriding the constructor function inside of the component sub class
  //   //but we still want to make sure the set up code in the base class constrtuctor method are still called -
  //   //super is reference to parent's constructor method
  //   super(props);
  //   //initialize state here
  //   this.state = { lat: null, errorMessage: '' };
  // }
  //equivalent to the code inside the contstructor function above
  state = { lat: null, errorMessage: '' };

  componentDidMount()  {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      }, //success callback
      err => {
        this.setState({ errorMessage: err.message });
      }//failure callback
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    } else {
      return <Spinner message="Please accept location request"/>
    }
  }

  //required render method
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

/*
Lifecycle methods
costructor - initialize state, initial data loading (API request, etc.)
render - return JSX THATS all
componentDidMount - perfect location to start outside process or do any initial data loading - only evoked one time. Official docs and best practices say to data load in componentDidMount. -- makes code clearer so that other devs will know where all of the data loading code is.
componentDidUpdate - called when state changes or gets new set of props from parent. Good place to do data loading when changes to parent needed to be taken into account. EX: network request everytime something on the screen in changes on interacted with.
componentWillUnMount - good place to clean up before component unmopunts - EI. non-react stuff


*/

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);


const App = () => {
  return (
    <div>
      <Segment>
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
          No documents are listed for this customer.
        </div>
      </Segment>
      <Segment>
        <h4 class="ui header">For Your Information</h4>
        <p></p>
      </Segment>
    </div>
  );
}

const Segment = (props) => {
  return <div className="ui placeholder segment">{props.children}</div>
};
