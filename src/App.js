import React, { Component } from 'react';
import './App.css';
import DisplayImages from './Components/DisplayImages.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs: []
    };
  }

  componentDidMount() {
    let YOUR_ACCESS_KEY = "c8820dbd1ad85cbbf0e357d033460e4931dd8b02d0f8526ca8b0300cfcc7bae8";
    fetch("https://api.unsplash.com/photos/?client_id=" + YOUR_ACCESS_KEY)
      .then(res => res.json())
      .then(data => {
        this.setState({ imgs: data });
      })
      .catch(err => {
        console.log('Error happened during fetch!', err);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>GALLERY</h1>
        <DisplayImages data={this.state.imgs} />
      </div>
    );
  }
}
