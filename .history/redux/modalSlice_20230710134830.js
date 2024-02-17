import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openloginModal: false
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLoginModal : (state) => {
        state.openloginModal = true
    },
    closeLoginModal: (state) => {
        state.closeloginModal = false
    }
  }
});

export const { openLoginModal, closeLoginModal } = modalSlice.actions

export default modalSlice.reducer