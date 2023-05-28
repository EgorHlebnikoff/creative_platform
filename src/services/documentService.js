export const documentApi = (builder) => ({
    addFile: builder.mutation({
        query: (file) => {
            console.dir(file);

            return {
                url: "/Document/add-file",
                method: "POST",
                body: file,
            };
        },
        invalidatesTags: ["document"],
    }),
});
