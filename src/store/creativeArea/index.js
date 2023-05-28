import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/api.js";

export const creativeAreaSlice = createSlice({
    name: "creativeArea",
    initialState: {
        areas: [],
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.getAllCreativeArea.matchFulfilled,
            (state, { payload }) => {
                state.areas = [...payload.items];
            },
        );
    },
});

export default creativeAreaSlice.reducer;

export const selectAreas = (state) => state.creativeArea.areas;
