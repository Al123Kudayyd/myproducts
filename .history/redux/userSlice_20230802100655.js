import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: null,
    email: null, 
    uid: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, ac) => {
        state.username = action.payload.username,
        state.email = action.payload.email,
        state.uid = action.payload.uid
    }, 
    signOutUsers: (state) => {
        state.username = null
        state.email = null
        state.uid = null
    }
  }
});

export const { setUsers, signOutUsers } = userSlice.actions

export default userSlice.reducer