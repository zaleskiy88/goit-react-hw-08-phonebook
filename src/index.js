import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';
import { App } from 'components/App';

export * from 'redux/filter/filterSlice';
export * from 'redux/contacts/contactsSlice';
export * from 'redux/selectors';
export * from 'redux/contacts/operations';
export * from 'redux/auth/authSlice';
export * from 'redux/auth/operations';
export * from 'components/SharedLayout/SharedLayout';
export * from 'components/ContactsForm/ContactsForm';
export * from 'components/ContactsList/ContactsList';
export * from 'components/ContactsFilterInput/ContactsFilterInput';
export * from 'components/App';
export * from 'components/ContactsForm/ContactsForm.styled';
export * from 'components/ContactsList/ContactsList.styled';
export * from 'components/ui/Button.styled';
export * from 'components/ui/AppContainer.styled';
export * from 'components/ui/Form.styled';
export * from 'components/ui/Input.styled';
export * from 'components/ui/Label.styled';
export * from 'components/ui/Toaster';
export * from 'components/ListItem/ListItem';
export * from 'components/ListItem/ListItem.styled';
export * from 'components/SharedLayout/SharedLayout';
export * from 'components/Navigation/Navigation';
export * from 'components/AppBar/AppBar';
export * from 'components/AuthNavigation/AuthNav';
export * from 'components/LoginForm/LoginForm';
export * from 'components/Signup/SignupForm';
export * from 'components/UserMenu/UserMenu';
export * from 'components/RestrictedRoute';
export * from 'components/PrivateRoute';
export * from 'pages/Home';
export * from 'pages/Login';
export * from 'pages/Signup';
export * from 'pages/Phonebook';
export * from 'utils/capitalizeFirstLowercaseRest';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/goit-react-hw-07-phonebook">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  //</React.StrictMode>
);
