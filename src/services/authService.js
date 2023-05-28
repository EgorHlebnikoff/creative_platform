export const userApi = (builder) => ({
    login: builder.mutation({
        query: (credentials) => ({
            url: "/Authenticate/login",
            method: "POST",
            body: credentials,
        }),
    }),
    signUp: builder.mutation({
        query: (credentials) => ({
            url: "/User/register",
            method: "POST",
            body: credentials,
        }),
    }),
    testAuth: builder.query({
        query: () => ({ url: "/Test/test-authorize" }),
    }),
    testRole: builder.query({
        query: () => ({ url: "/Test/test-authorize-role" }),
    }),
});
