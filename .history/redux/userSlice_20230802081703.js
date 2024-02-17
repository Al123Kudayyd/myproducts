import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: null,
    name: null, 
    email: null, 
    uid: null,
    photoUrl: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export const {} = userSlice.actions

export default userSlice.reducer