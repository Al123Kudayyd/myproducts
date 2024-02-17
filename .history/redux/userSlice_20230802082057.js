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
    signIn: (action, state) => {
        state.username = action.payload.username,
        state.email = action.payload.email,
        state.uid = action.payload.uid
    }, 
    sign
  }
});

export const {} = userSlice.actions

export default userSlice.reducer