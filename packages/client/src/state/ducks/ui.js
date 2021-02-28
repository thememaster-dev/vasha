import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {},
});

export default {
  uiModal: modalSlice.reducer,
};
