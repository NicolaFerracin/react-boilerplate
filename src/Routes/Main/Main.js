import React, { Component } from 'react';
import Counter from '../../Components/Counter/Counter';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="salutation">Hello World!</h1>
        <Counter />
      </div>
    );
  }
}

export default Main;
