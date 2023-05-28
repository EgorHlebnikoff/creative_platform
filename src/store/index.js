import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api.js";
import creativeAreaReducer from "./creativeArea/index.js";
import userReducer from "./user/index.js";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        creativeArea: creativeAreaReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
