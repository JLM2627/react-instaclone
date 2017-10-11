import React, { Component } from 'react';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Posts />
      </div>
    );
  }
}

export default App;
