import React, { Component } from 'react';
import Header from "./header/Header.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
