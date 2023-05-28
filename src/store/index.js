import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api.js";
import creativeAreaReducer from "./creativeArea/index.js";
import servicesReducer from "./services/index.js";
import userReducer from "./user/index.js";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userReducer,
        creativeArea: creativeAreaReducer,
        services: servicesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
