import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component{
  render() {
    return(
      <header>
        <Link to="/">Home</Link>
        <Link to="/product/4">product</Link>
        <Link to="/search/bags">search products</Link>
      </header>
    );
  }
}

export default Header;
