import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../../actions/count';
import PropTypes from 'prop-types';

export class Counter extends Component {
  render() {
    const { number, increase, decrease } = this.props;
    return (
      <div>
        <p>Some state changes: {number}</p>
        <br/>
        <button onClick={() => increase(1)}>Increase</button>
        <button onClick={() => decrease(1)}>Decrease</button>
      </div>
    );
  }
}

Counter.propTypes = {
  'number': PropTypes.number,
  'increase': PropTypes.func,
  'decrease': PropTypes.func
};

export default connect(
  state => ({ 'number': state.count.number }),
  { increase, decrease }
)(Counter);
