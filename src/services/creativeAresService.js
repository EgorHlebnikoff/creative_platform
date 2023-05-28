export const creativeAreaApi = (builder) => ({
    getAllCreativeArea: builder.query({
        query: () => ({ url: "/CreativeArea/all" }),
    }),
    getCreativeAreaById: builder.query({
        query: (id) => ({
            url: `/CreativeArea/get-id?id=${id}`,
        }),
    }),
    getCreativeAreaServices: builder.query({
        query: (id) => ({
            url: `/ServiceLogic/area-id?id=${id}`,
        }),
    }),
});
