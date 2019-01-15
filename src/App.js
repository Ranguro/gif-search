import axios from 'axios';
import React, { Component } from "react";
import "./App.css";
import SearchAppBar from './components/SearchAppBar';
import PhotoGridList from './components/PhotoGridList';

class App extends Component {


  constructor() {
    super();
    this.state = {
      data: [],
      apiUrl: 'http://api.giphy.com/v1/gifs/search',
      apiKey: 'LiT4XaeBUDCDtVpLNuTcc8fzKv84AmW6',
      searchTerm: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <SearchAppBar title='GIF Search' searchPlaceholder='Search all GIFs' onSearch={this.handleSearch} validateKeyPress={this.handleKeyPress} />
        <PhotoGridList data={this.state.data} />
      </div >
    );
  }

  handleKeyPress(input) {
    if (input.keyCode === 13) {
      const { searchTerm } = this.state;
      if (searchTerm === '') {
        this.setState({ data: [] })
      } else {
        axios.get(`${this.state.apiUrl}?q=${searchTerm.trim().replace(/ /g, "+")}&api_key=${this.state.apiKey}`)
          .then(res => {
            const data = res.data.data;
            this.setState({ data });
          })
          .catch(err => console.log(err))
      }

    }
  }

  handleSearch(input) {
    this.setState({ searchTerm: input.target.value });
  }
}

export default App;
