import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../../actions/count';

class Counter extends Component {
  render() {
    const { number, increase, decrease } = this.props;
    return (
      <div>
        Some state changes:
        <br/>
        {number}
        <br/>
        <button onClick={() => increase(1)}>Increase</button>
        <button onClick={() => decrease(1)}>Decrease</button>
      </div>
    );
  }
}

Counter.propTypes = {
  'number': React.PropTypes.number,
  'increase': React.PropTypes.func,
  'decrease': React.PropTypes.func
};

export default connect(
  state => ({ 'number': state.count.number }),
  { increase, decrease }
)(Counter);
