export const documentApi = (builder) => ({
    addFile: builder.mutation({
        query: (file) => ({
            url: "/Document/add-file",
            method: "POST",
            body: file,
        }),
        invalidatesTags: ["document"],
    }),
});
