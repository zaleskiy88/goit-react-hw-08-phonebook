import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
///////////////////////////////////////////////////////////////
export const ErrorPage = () => {
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
        sx={{
          fontSize: '200px',
          fontWeight: 600,
          marginTop: '150px',
          marginBottom: '20px',
        }}
      >
        404
      </Typography>
      <Typography variant="h6" sx={{ fontSize: '50px', fontWeight: 500 }}>
        Not Found
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ fontSize: '15px', color: '#6c5f5f', marginBottom: '80px' }}
      >
        The resource requested could not be found on this server :(
      </Typography>

      <Typography variant="body2" sx={{ fontSize: '15px', fontWeight: '300' }}>
        Go <Link to="/"> Home</Link>
      </Typography>
    </div>
  );
};
