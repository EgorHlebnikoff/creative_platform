import PropTypes from "prop-types";
import RenterCatalog from "./Renter";

const Catalog = ({ user }) => {
    if (Object.values(user).length === 0 || user.role === "Renter") {
        return <RenterCatalog showPrices={user?.role === "Renter"} />;
    }

    return <div></div>;
};

Catalog.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        role: PropTypes.string,
    }),
};

export default Catalog;
