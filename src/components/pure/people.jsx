import React from 'react';
import PropTypes from 'prop-types';

const PeopleComponent = (props) => {
  const { todo } = props;
  console.log('🚀 ~ file: people.jsx ~ line 6 ~ PeopleComponent ~ todo', todo);

  return (
    <div>
      <h2>Nombre: {`${todo.name} ${todo.lastName}`}</h2>
      <h3>Email: {todo.email}</h3>
      <h5>Connected: {todo.connected ? 'Yes' : 'No'}</h5>
    </div>
  );
};

PeopleComponent.propTypes = {};

export default PeopleComponent;
