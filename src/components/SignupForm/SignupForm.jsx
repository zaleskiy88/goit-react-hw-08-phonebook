import { useDispatch } from 'react-redux';
import { createUser } from 'redux/auth/operations';
import { Form, Label } from 'components/ui/AuthForm.styled';

import { Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const SignupForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      createUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container sx={{ justifyContent: 'center' }}>
              <Grid item>
                <Link to="/login">{'Already have an account? Log In'}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

///////////////////////
// export const SignupForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       createUser({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <Form onSubmit={handleSubmit} autoComplete="off">
//       <Label>
//         Username
//         <input type="text" name="name" />
//       </Label>
//       <Label>
//         Email
//         <input type="email" name="email" />
//       </Label>
//       <Label>
//         Password
//         <input type="password" name="password" />
//       </Label>
//       <button type="submit">Register</button>
//     </Form>
//   );
// };
