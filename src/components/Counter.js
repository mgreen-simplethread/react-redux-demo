import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counter, incrementCounter, decrementCounter }) => (
  <section className="counter col">
    <p>You clicked the button {counter} times</p>
    <button onClick={incrementCounter}>++</button>
    <button onClick={decrementCounter}>--</button>
  </section>
);

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export default Counter;
