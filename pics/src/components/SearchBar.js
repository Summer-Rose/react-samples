import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

//use arrow key function declaration to help issues with context.
//automatically binds the function to the object context
  onFormSubmit = (event) => {
    event.preventDefault();
    //pass term back up to App where API call will happen
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}/>
          </div>
        </form>
      </div>
    );
  }
}

//controlled vs uncontrolled
//Why use state in input?
//set state will cause component to rerender
//re-render value will insert value into input
//difference? uncontrolled the current value of
//the input lives in the DOM -- React has no
//idea what the vlaue of that input is
//Controlled -- react will always know the inptu
//value without having to ask the DOM


export default SearchBar;
