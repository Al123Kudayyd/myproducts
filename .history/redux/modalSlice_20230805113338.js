import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openloginModal: false,
    opensignupModal: false,
    openreviewModal
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
    openSignUpModal : (state) => {
        state.opensignupModal = true
    },
    closeSignUpModal : (state) => {
        state.opensignupModal = false
    },
    openReviewModal: (state) => {
        state.openreviewModal = true
    },
    closeReviewModal: (state) => {
        state.openreviewModal
    }
  }
});

export const { openLoginModal, closeLoginModal, openSignUpModal, closeSignUpModal } = modalSlice.actions

export default modalSlice.reducer