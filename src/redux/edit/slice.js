import { createSlice } from "@reduxjs/toolkit";


const editSlice = createSlice({
  name: "edit",
  initialState: {
    modal: false,
    item: {name: '', number: ''},
    },
  
  reducers: {
    openEditModal(state, action) {
      state.modal = true;
      state.item = action.payload;
    },
    closeEditModal(state) {
      state.modal = false;
    },
  },
});


export const { openEditModal, closeEditModal } = editSlice.actions;
export default editSlice.reducer;