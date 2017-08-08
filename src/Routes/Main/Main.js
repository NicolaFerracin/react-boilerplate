import React, { Component } from 'react';
import './Main.scss';

/**
 * Main route
 *
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
  /**
   * Renders main route
   * 
   * @return {JSX.Element} Main route
   */
  render() {
    return (
      <div>
        <h1 className="salutation">Hello World!</h1>
      </div>
    );
  }
}

export default Main;
