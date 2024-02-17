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
    openSignUModal : (state) => {
        state.opensignupModal = true
    },
    closeSignUModal : (state) => {
        state.opensignupModal = false
    }
  }
});

export const { openLoginModal, closeLoginModal,  } = modalSlice.actions

export default modalSlice.reducer