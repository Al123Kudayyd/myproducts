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
        username = 
    }
  }
});

export const {} = userSlice.actions

export default userSlice.reducer