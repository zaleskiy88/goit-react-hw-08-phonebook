import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { filterContacts } from 'index';
////////////////////
import { TextField } from '@mui/material';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();
  return (
    <TextField
      type="text"
      name="filter"
      label="Name"
      variant="outlined"
      helperText="Search by contact's name"
      size="small"
      fullWidth
      onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      id={filterId}
      sx={{ display: 'block' }}
    />
  );
};
