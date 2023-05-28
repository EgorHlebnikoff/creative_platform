import { serviceApi } from "./serviceService.js";
import { userApi } from "./userService.js";
import createService from "./createService.js";
import { creativeAreaApi } from "./creativeAresService.js";
import { documentApi } from "./documentService";

export const api = createService((builder) => ({
    ...userApi(builder),
    ...documentApi(builder),
    ...creativeAreaApi(builder),
    ...serviceApi(builder),
}));

export const {
    useLoginMutation,
    useSignUpMutation,
    useAddFileMutation,
    useGetAllCreativeAreaQuery,
    useGetCreativeAreaByIdQuery,
    useLazyGetCreativeAreaServicesQuery,
    useGetAllServicesQuery,
} = api;
