import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import {
  ContactsForm,
  ContactsList,
  ContactsFilter,
  selectContacts,
  fetchAllContacts,
  selectIsLoading,
} from 'index';
/////////////
import { Typography, Box } from '@mui/material';

export const Phonebook = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: '400',
            marginBottom: '50px',
          }}
        >
          Phonebook
        </Typography>
        <ContactsForm />

        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: '400',
            marginTop: '50px',
          }}
        >
          Contacts{' '}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isLoading && (
            <ThreeDots
              height="150"
              width="300"
              radius="9"
              color="#1976d2"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          )}

          {contacts.length > 1 && isLoading === false && (
            <>
              <ContactsFilter />
            </>
          )}

          {contacts.length > 0 && isLoading === false && (
            <>
              <ContactsList />
            </>
          )}

          {contacts.length === 0 && isLoading === false && (
            <Typography variant="subtitle1">
              Phonebook is empty (: <br />
              Please add some contacts
            </Typography>
          )}
        </Box>
      </div>
    </>
  );
};
