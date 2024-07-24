import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    groups: [],
  },
  reducers: {
    setGroups: (state, action) => {
      if (action?.payload) {
        state.groups = [...state.groups, { ...action.payload }];
      }
    },
  },
});

export const { setGroups } = userSlice.actions;

export default userSlice.reducer;
