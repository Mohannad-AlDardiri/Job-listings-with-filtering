import { createSlice } from "@reduxjs/toolkit";
const initState = { toggle: true };

const AuthSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    toggle: (state, action) => {
      state.toggle = !state.toggle;
    }
  }
});
export const { toggle } = AuthSlice.actions;
export default AuthSlice.reducer;
