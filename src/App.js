import axios from 'axios';
import React, { Component } from "react";
import "./App.css";
import SearchAppBar from './components/SearchAppBar';

class App extends Component {


  constructor() {
    super();
    this.state = {
      data: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  render() {
    return (
      <SearchAppBar title='GIF Search' searchPlaceholder='Search all GIFs' onSearch={this.handleSearch} />
    );
  }

  handleSearch(input) {
    const API_URL = 'http://api.giphy.com/v1/gifs/search';
    const API_KEY = 'LiT4XaeBUDCDtVpLNuTcc8fzKv84AmW6';
    axios.get(`${API_URL}?q=${input.trim().replace(/ /g, "+")}&api_key=${API_KEY}`)
      .then(res => {
        const data = res.data.data;
        this.setState({ data });
      })
  }
}

export default App;
