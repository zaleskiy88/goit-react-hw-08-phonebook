import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { logOutUser } from 'index';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
//////////////////////////////////////////////////////////////////

export const UserMenu = () => {
  const state = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
      }}
    >
      <p style={{ marginRight: '15px' }}>{state.user.email}</p>
      <Button
        variant="contained"
        size="small"
        onClick={() => dispatch(logOutUser())}
        sx={{ color: 'black', backgroundColor: 'whitesmoke' }}
      >
        Logout
        <LogoutRoundedIcon fontSize="small" sx={{ marginLeft: '10px' }} />
      </Button>
    </Box>
  );
};
