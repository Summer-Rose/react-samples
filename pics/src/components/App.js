import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  //add async allows await async syntax
  onSearchSubmit = async (term) => {
    //call to API
    //first arg, address, second arguemn
    //axios returns a promise
    // axios.get('https://api.unsplash.com/search/photos', {
    //   params: { query: term },
    //   headers: {
    //     Authorization: 'Client-ID a0100b32a4d3988a9befc95361a24a89dae31ac4d9fc4465e607f76afda08ba7'
    //   }
    // }).then((response) => {
    //   //Callback
    //   console.log(response.data.results);
    // });
    //alternate method
    const response = await unsplash.get('search/photos', {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      Found: {this.state.images.length} images
      <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
