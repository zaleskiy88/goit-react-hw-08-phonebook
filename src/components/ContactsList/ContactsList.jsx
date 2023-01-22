import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, selectContacts, selectFilterValue } from 'index';
/////////////////

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const contactsFilter = useSelector(selectFilterValue);

  const getFilteredContacts = () => {
    const normalizedFilterValue = contactsFilter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <List>
        {filteredContacts.map(({ name, number, id }) => {
          return <ListItem name={name} number={number} id={id} key={id} />;
        })}
      </List>
    </>
  );
};
