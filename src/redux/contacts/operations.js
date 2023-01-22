import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
////////////

// const contactsAPI = axios.create({
//   baseURL: 'https://63bdb06a2f181e054bcd5330.mockapi.io',
// });

const errorMessageHAndler = message =>
  toast.error(`Something went wrong. Please check error message: "${message}"`);

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');

      if (res.data.length > 0) {
        toast.success('Contacts loaded!');
      } else {
        toast.error('Contacts book is empty (:');
      }
      return res.data;
    } catch (error) {
      errorMessageHAndler(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', { name, number });
      toast.success(`${name} contact was added!`);
      return res.data;
    } catch (error) {
      errorMessageHAndler(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id, name }, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      toast.success(`${name} contact was deleted!`);
      return res.data;
    } catch (error) {
      errorMessageHAndler(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
