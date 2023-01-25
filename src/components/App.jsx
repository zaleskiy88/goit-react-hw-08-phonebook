import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import {
  SharedLayout,
  Home,
  Login,
  Signup,
  Phonebook,
  selectAuth,
  refreshUser,
  RestrictedRoute,
  PrivateRoute,
} from 'index';

///////////////////////////////////

export const App = () => {
  const authState = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!authState.isRefreshing && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />

            <Route
              path="contacts"
              element={<PrivateRoute component={Phonebook} />}
            />

            <Route
              path="login"
              element={
                <RestrictedRoute component={Login} redirectTo="/contacts" />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute component={Signup} redirectTo="/contacts" />
              }
            />
          </Route>
        </Routes>
      )}
      <Toaster />
    </>
  );
};
//////////////////////////////////////////
// import { ContactsForm,
//   ContactsList,
//   ContactsFilter,
//   AppContainer,
//   selectContacts,
//   fetchAllContacts,
//   selectIsLoading,
//   SharedLayout,
// } from 'index';
// import { ThreeDots } from 'react-loader-spinner';
//////////////////////////////////////////
// const contacts = useSelector(selectContacts);
// const isLoading = useSelector(selectIsLoading);
// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(fetchAllContacts(selectIsLoading));
// }, [dispatch]);
//  <AppContainer>
//       <h2>Phonebook</h2>
//       <ContactsForm />

//       <h2>Contacts</h2>

//       {isLoading && (
//         <ThreeDots
//           height="150"
//           width="300"
//           radius="9"
//           color="#000000"
//           ariaLabel="three-dots-loading"
//           visible={true}
//         />
//       )}

//       {contacts.length > 1 && isLoading === false && (
//         <>
//           <ContactsFilter />
//         </>
//       )}

//       {contacts.length > 0 && isLoading === false && (
//         <>
//           <ContactsList />
//         </>
//       )}

//       {contacts.length === 0 && isLoading === false && (
//         <p>
//           Phonebook is empty (: <br />
//           Please add some contacts
//         </p>
//       )}

//       <Toaster />
//     </AppContainer>
