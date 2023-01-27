import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';
////////

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [deleteContact.pending]: handlePending,
    [fetchAllContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [updateContact.pending]: handlePending,
    ///////////////REJECTED
    [addContact.rejected]: handleRejected,
    [fetchAllContacts.rejected]: handleRejected,
    [updateContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    //////// FETCH ALL CONTACTS
    [fetchAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    /////// ADD Contact
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    ////// DELETE CONTACT
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },

    ////// UPDATE CONTACT
    [updateContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.map(contact => {
        if (contact.id === action.payload.id) {
          contact.name = action.payload.name;
          contact.number = action.payload.number;
        }
        return true;
      });
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
