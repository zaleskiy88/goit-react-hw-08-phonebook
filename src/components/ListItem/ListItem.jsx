import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'index';
////////////////
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

export const ListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <Card
      sx={{
        marginBottom: '25px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        <Typography
          variant="subtitle1"
          sx={{ color: '#857474', textDecoration: 'underline' }}
        >
          Name:
        </Typography>

        <Typography variant="h6" sx={{ fontSize: '22px' }} gutterBottom>
          {name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: '#857474', textDecoration: 'underline' }}
        >
          Number:
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '22px' }}>
          {number}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          onClick={() => dispatch(deleteContact({ id, name }))}
          variant="outlined"
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setIsUpdating(true);
            console.log(isUpdating);
          }}
        >
          Modify
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
