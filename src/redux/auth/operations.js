import axios from 'axios';
//import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
//////////////////

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const createUser = createAsyncThunk(
  'auth/createUser',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const res = await axios.post('/users/logout');
      clearToken();

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const { auth } = thunkApi.getState();

    if (!auth.token) return thunkApi.rejectWithValue('Unable to fetch');

    try {
      setToken(auth.token);
      const res = await axios.get('/users/current');

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
