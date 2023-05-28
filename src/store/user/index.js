import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/api.js";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem("user") || null),
        token: localStorage.getItem("token"),
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.user = payload.user;

            localStorage.setItem("user", JSON.stringify(payload.user));
            localStorage.setItem("token", payload.token);
        });
        builder.addMatcher(api.endpoints.signUp.matchFulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.user = payload.user;

            localStorage.setItem("user", JSON.stringify(payload.user));
            localStorage.setItem("token", payload.token);
        });
    },
});

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.user;
