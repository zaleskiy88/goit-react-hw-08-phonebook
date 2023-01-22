import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Label } from './ContactsFilterInput.styled';
import { filterContacts } from 'index';
////////////////////

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();
  return (
    <Label htmlFor={filterId}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        id={filterId}
      />
    </Label>
  );
};
