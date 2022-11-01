import React from 'react';
import PropTypes from 'prop-types';
import PeopleComponent from '../pure/people';
import { People } from '../../models/people.class';

const PeopleListComponent = (props) => {
  const defaultPeople = new People(
    'Luis',
    'Luchin',
    'daprimovaria@gmail.com',
    false
  );

  return (
    <div>
      <div>People</div>
      <PeopleComponent todo={defaultPeople} />
    </div>
  );
};

PeopleListComponent.propTypes = {};

export default PeopleListComponent;
