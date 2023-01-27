import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, updateContact } from 'index';
import { CardActions, CardContent, Button, TextField } from '@mui/material';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
////////////////////////////////////////

export const ContactUpdateForm = ({ name, number, id, setIsUpdating }) => {
  const [formValues, setFormValues] = useState({
    modifiedName: name,
    modifiedNumber: number,
  });

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const inputHandler = evt => {
    const { name, value } = evt.currentTarget;

    setFormValues(prev => {
      return { ...prev, [name]: value };
    });
  };

  const formSubmitHandler = ({ modifiedName, modifiedNumber }) => {
    const normalizedNameValue = modifiedName.toLowerCase();
    const normalizedNamesArr = contacts.map(contact =>
      contact.name.toLowerCase()
    );

    if (modifiedName === name && modifiedNumber === number) {
      setIsUpdating(false);
      return false;
    }

    if (normalizedNamesArr.includes(normalizedNameValue)) {
      toast.error(`${modifiedName} is already in the list`);
      return;
    }

    if (!normalizedNamesArr.includes(normalizedNameValue)) {
      dispatch(updateContact({ modifiedName, modifiedNumber, id }));
      toast.success('Contact updated!');
      return true;
    }
  };

  const submitHandler = evt => {
    evt.preventDefault();

    if (formSubmitHandler(formValues)) {
      setIsUpdating(false);
    }
  };

  const { modifiedName, modifiedNumber } = formValues;

  return (
    <CardContent sx={{ paddingBottom: '1px' }}>
      <form onSubmit={submitHandler}>
        <TextField
          label="Name"
          autoComplete="off"
          required
          type="text"
          name="modifiedName"
          defaultValue={modifiedName}
          size="small"
          onChange={inputHandler}
          sx={{ backgroundColor: '#ecdddd', marginRight: '25px' }}
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          }}
        />

        <TextField
          label="Number"
          autoComplete="off"
          type="tel"
          name="modifiedNumber"
          variant="outlined"
          size="small"
          defaultValue={modifiedNumber}
          onChange={inputHandler}
          sx={{ backgroundColor: '#ecdddd' }}
          inputProps={{
            pattern: `\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9} 
              `,
            title:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          }}
          required
        />

        <CardActions
          sx={{
            marginTop: '10px',
          }}
        >
          <Button
            onClick={() => {
              setIsUpdating(false);
              setFormValues({
                modifiedName: name,
                modifiedNumber: number,
              });
            }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            size="medium"
            variant="contained"
            sx={{ width: '95px' }}
          >
            Done
          </Button>
        </CardActions>
      </form>
    </CardContent>
  );
};

ContactUpdateForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setIsUpdating: PropTypes.func.isRequired,
};
