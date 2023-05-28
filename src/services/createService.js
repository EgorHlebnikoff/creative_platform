import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createService = (endpoints) => {
    return createApi({
        baseQuery: fetchBaseQuery({
            baseUrl: import.meta.env.VITE_API_HOST,
            prepareHeaders: (headers, { getState }) => {
                const token = getState().user.token;
                if (token) {
                    headers.set("authorization", `Bearer ${token}`);
                }
                return headers;
            },
        }),
        endpoints,
    });
};

export default createService;
