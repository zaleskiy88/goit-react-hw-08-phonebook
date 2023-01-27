import { CardActions, CardContent, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'index';
import PropTypes from 'prop-types';
//////////////////////////////////////

export const ContactInfo = ({ name, number, id, setIsUpdating }) => {
  const dispatch = useDispatch();
  return (
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
  );
};

ContactInfo.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setIsUpdating: PropTypes.func.isRequired,
};
