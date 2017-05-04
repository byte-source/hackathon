require('./styles/main.scss');

import React from "react";
import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router";
import {render} from "react-dom";
import App from './components/App.jsx';
import Home from './components/home/Home.jsx';
import ProductView from './components/product/ProductView.jsx';
import ProductList from './components/product/ProductList.jsx';
import Header from './components/header/Header.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

let reducer = function () {
  return {}
};

let store = createStore(reducer);
render(<Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/search/:item" component={ProductList} />
            <Route path="/product/:id" component={ProductView} />
          </Route>
        </Router>
       </Provider>,
      document.getElementById("app"))
