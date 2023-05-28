const getBase64Image = (img) => {
    return new Promise((res) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => res(reader.result));
        reader.readAsDataURL(img);
    });
};

export default getBase64Image;
