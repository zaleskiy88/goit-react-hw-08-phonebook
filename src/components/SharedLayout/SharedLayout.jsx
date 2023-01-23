import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { AppBar } from 'index';
import Container from '@mui/material/Container';
/////////////

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="lg">
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
