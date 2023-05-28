const getAreaAddress = (area) => {
    const addressParts = [];

    if (area.city) {
        addressParts.push(`г. ${area.city}`);
    }

    if (area.street) {
        addressParts.push(area.street);
    }

    if (area.house) {
        addressParts.push(`дом ${area.house}`);
    }

    if (area.building) {
        addressParts.push(`строение ${area.building}`);
    }

    if (area.office) {
        addressParts.push(`помещение ${area.office}`);
    }

    return addressParts.join(", ");
};

export default getAreaAddress;
