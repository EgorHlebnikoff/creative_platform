export const creativeAreaApi = (builder) => ({
    getAllCreativeArea: builder.query({
        query: () => {
            return { url: "/CreativeArea/all" };
        },
    }),
});
