import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openloginModal: false,
    opensignupModal: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLoginModal : (state) => {
        state.openloginModal = true
    },
    closeLoginModal: (state) => {
        state.openloginModal = false
    },
    openSignInModal : (state) => {
        state.opensignupModal = true
    },
    closeSignInModal : (state) => {
        state.opensignupModal
    }
  }
});

export const { openLoginModal, closeLoginModal } = modalSlice.actions

export default modalSlice.reducer