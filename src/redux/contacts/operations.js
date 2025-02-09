import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
        return response.data;
    } catch (e) {
        toast.error('Request failed')
      return thunkAPI.rejectWithValue(e.message);
    } 
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({name, number}, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      toast.success('New contact successfully added')
      return response.data;
    } catch (e) {
        toast.error('Adding new contact failed')
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      toast.success('Contact successfully deleted')
      return response.data;
    } catch (e) {
        toast.error('Deleting failed')
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({name, number, id}, thunkAPI) => {
    try {
        const response = await axios.patch(`/contacts/${id}`, {name, number});
      return response.data;
    } catch (e) {
        toast.error('Editing failed')
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);