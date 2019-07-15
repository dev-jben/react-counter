import React from 'react';
import PropTypes from 'prop-types';
import CounterItem from './CounterItem';

const CounterList = (props) => {
  const { counters, onIncrement, onDecrement } = props;
  return (
    counters.map(counter => {
      return (
        <div className="counter">
          <CounterItem
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </div>
      )
    })
  );
}

CounterList.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.object),
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
};
 
export default CounterList;