export const serviceApi = (builder) => ({
    getAllServices: builder.query({
        query: () => {
            return {
                url: "/DirectoryLogicService/all",
            };
        },
    }),
});
