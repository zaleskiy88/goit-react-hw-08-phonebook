import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact, selectContacts, updateContact } from 'index';
import { toast } from 'react-hot-toast';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
} from '@mui/material';

////////////////

export const ListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [isUpdating, setIsUpdating] = useState(false);
  const [formValues, setFormValues] = useState({
    modifiedName: name,
    modifiedNumber: number,
  });

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

    if (
      normalizedNamesArr.includes(normalizedNameValue) &&
      modifiedNumber === number
    ) {
      setIsUpdating(false);
      return false;
    } else {
      dispatch(updateContact({ modifiedName, modifiedNumber, id }));
      toast.success('Contact updated!');

      return true;
    }
  };

  const submitHandler = evt => {
    evt.preventDefault();

    if (formSubmitHandler(formValues)) {
      setIsUpdating(false);
      //setFormValues({ modifiedName: '', modifiedNumber: '' });
    }
    // else {
    //   setFormValues(prev => {
    //     return { modifiedName: '', modifiedNumber: prev.number };
    //   });
    // }
  };

  const { modifiedName, modifiedNumber } = formValues;

  return (
    <li style={{ listStyle: 'none' }}>
      <Card
        sx={{
          marginBottom: '25px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {isUpdating ? (
          <>
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
                  required
                  type="tel"
                  name="modifiedNumber"
                  defaultValue={modifiedNumber}
                  variant="outlined"
                  size="small"
                  onChange={inputHandler}
                  sx={{ backgroundColor: '#ecdddd' }}
                  inputProps={{
                    pattern:
                      '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
                    title:
                      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
                  }}
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
          </>
        ) : (
          <>
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
                }}
              >
                Modify
              </Button>
            </CardActions>
          </>
        )}
      </Card>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
