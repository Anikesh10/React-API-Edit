import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux' 

import Form from './components/form';
import Post from './components/post';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Form />
          <Post /> 
        </div>
      </Provider>
    );
  }
}

export default App;
