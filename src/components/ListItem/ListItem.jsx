import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Contact, Button, deleteContact } from 'index';
////////////////

export const ListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Contact>
      {name}: {number}
      <Button onClick={() => dispatch(deleteContact({ id, name }))}>
        Delete
      </Button>
    </Contact>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
