import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from '@mui/material';
import { ContactUpdateForm } from './ContactUpdateForm';
import { ContactInfo } from './ContactInfo';
////////////////////////////////////////////

export const ListItem = ({ name, number, id }) => {
  const [isUpdating, setIsUpdating] = useState(false);

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
          <ContactUpdateForm
            name={name}
            number={number}
            id={id}
            setIsUpdating={setIsUpdating}
          />
        ) : (
          <ContactInfo
            name={name}
            number={number}
            id={id}
            setIsUpdating={setIsUpdating}
          />
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
