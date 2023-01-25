import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { Link } from 'react-router-dom';
import phonebookIcon from '../components/ui/phonebookIcon.jpg';

export const Home = () => {
  const authState = useSelector(selectAuth);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: '60px', marginTop: '50px', marginBottom: '90px' }}
      >
        Welcome to Phonebook's homepage!
      </Typography>
      <img
        src={phonebookIcon}
        alt="phonebook icon"
        style={{ height: '100px', width: '100px', marginBottom: '100px' }}
      />

      {!authState.isLoggedIn && (
        <Typography
          variant="body2"
          sx={{ fontSize: '20px', fontWeight: '100' }}
        >
          Please <Link to="/login"> Login</Link> or{' '}
          <Link to="/register">Sign Up</Link>
        </Typography>
      )}
    </div>
  );
};
