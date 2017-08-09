import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../../actions/count';

/**
 * Main route
 *
 * @class Main
 * @extends {Component}
 */
class Counter extends Component {
  constructor(props) {
    super(props);
  }
  /**
       * Renders main route
       * 
       * @return {JSX.Element} Main route
       */
  render() {
    const number = this.props;
    return (
      <div>
                Some state changes: {number}
        <button onClick={() => increase(1)}>Increase</button>
        <button onClick={() => decrease(1)}>Decrease</button>
      </div>
    );
  }
}

export default connect(
  state => {
      return ({ 'number': state.count.number })
  },
  { increase, decrease }
)(Counter);
