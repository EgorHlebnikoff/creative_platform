import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/api.js";

export const servicesSlice = createSlice({
    name: "services",
    initialState: {
        services: [],
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.getAllServices.matchFulfilled, (state, { payload }) => {
            state.services = [...payload.items];
        });
    },
});

export default servicesSlice.reducer;

export const selectServices = (state) => state.services.services;
