import React from 'react';
import PropTypes from 'prop-types';

const CounterItem = (props) => {
  const { counter, onIncrement, onDecrement } = props;
  return (
    <div className="counter__item">
      <h3>Current Count: {counter.count}</h3>
      <button
        className="counter__button counter__button--add"
        onClick={onIncrement.bind(this, counter.id, '+')}>+</button>
      <button
        className="counter__button counter__button--delete"
        onClick={() => onDecrement(counter.id, '-')}>-</button>
    </div>
  );
}

CounterItem.propTypes = {
  counter: PropTypes.object,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
};
 
export default CounterItem;