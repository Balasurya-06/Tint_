import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  loginStatus: boolean;
};

// Safely parse localStorage value
const user = localStorage.getItem("user");
let isLoggedIn = false;

try {
  const parsedUser = JSON.parse(user || "{}");
  isLoggedIn = Boolean(parsedUser?.id);
} catch (error) {
  isLoggedIn = false;
}

const initialState: AuthState = {
  loginStatus: isLoggedIn,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.loginStatus = action.payload;
    },
  },
});

export const { setLoginStatus } = authSlice.actions;

export default authSlice.reducer;
