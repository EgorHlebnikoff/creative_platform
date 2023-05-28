import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/api.js";

export const creativeAreaSlice = createSlice({
    name: "creativeArea",
    initialState: {
        currentArea: undefined,
        areas: [],
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.getAllCreativeArea.matchFulfilled,
            (state, { payload }) => {
                state.areas = [...payload.items];
            },
        );
        builder.addMatcher(
            api.endpoints.getCreativeAreaById.matchFulfilled,
            (state, { payload }) => {
                state.currentArea = { ...payload };
            },
        );
    },
});

export default creativeAreaSlice.reducer;

export const selectCurrentArea = (state) => state.creativeArea.currentArea;
export const selectAreas = (state) => state.creativeArea.areas;
