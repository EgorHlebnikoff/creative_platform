import { userApi } from "./authService.js";
import createService from "./createService.js";
import { creativeAreaApi } from "./creativeAresService.js";
import { documentApi } from "./documentService";

export const api = createService((builder) => ({
    ...userApi(builder),
    ...documentApi(builder),
    ...creativeAreaApi(builder),
}));

export const {
    useLoginMutation,
    useSignUpMutation,
    useAddFileMutation,
    useGetAllCreativeAreaQuery,
} = api;
