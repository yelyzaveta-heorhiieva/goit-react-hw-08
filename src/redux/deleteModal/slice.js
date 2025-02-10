import { createSlice } from "@reduxjs/toolkit";


const deleteSlice = createSlice({
  name: "delete",
  initialState: {
    modal: false,
    id:'',
    },
  
  reducers: {
    openDeleteModal(state, action) {
      state.modal = true;
      state.id = action.payload;
    },
    closeDeleteModal(state) {
      state.modal = false;
    },
  },
});


export const { openDeleteModal, closeDeleteModal } = deleteSlice.actions;
export default deleteSlice.reducer;