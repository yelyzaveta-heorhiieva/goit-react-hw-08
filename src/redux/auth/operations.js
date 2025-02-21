import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

export const baseUrl = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  try {
        const response = await axios.post(`${baseUrl}/users/signup`, credentials);
        setAuthHeader(response.data.token);
        return response.data;
  } catch (e) {
        toast.error('Register failed. You may already have an account with this email. Сheck the entered data, please.')
      return thunkAPI.rejectWithValue(e.message);
    } 
});

export const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
        const response = await axios.post(`${baseUrl}/users/login`, credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (e) {
        toast.error('Login failed. Сheck the entered data, please.')
      return thunkAPI.rejectWithValue(e.message);
    } 
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post(`${baseUrl}/users/logout`);
        clearAuthHeader();
    } catch (e) {
        toast.error('Logout failed')
      return thunkAPI.rejectWithValue(e.message);
    } 
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get(`${baseUrl}/users/current`);
      return response.data;
    } catch (e) {
        toast.error('Refresh failed')
      return thunkAPI.rejectWithValue(e.message);
    } 
});