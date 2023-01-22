import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Contact, deleteContact } from 'index';
////////////////
import { Card, CardActions, CardContent, Button } from '@mui/material';

export const ListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        marginBottom: '25px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        {name}: {number}
      </CardContent>

      <CardActions>
        <Button
          onClick={() => dispatch(deleteContact({ id, name }))}
          variant="outlined"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
