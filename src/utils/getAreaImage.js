import getBase64Image from "./getBase64Image.js";

const getAreaImage = async (imageId) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_HOST}/Document/get-file?id=${imageId}`,
    );
    const blob = await response.blob();

    return getBase64Image(blob);
};

export default getAreaImage;
