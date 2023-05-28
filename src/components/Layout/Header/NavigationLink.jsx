import clsx from "clsx";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import styles from "./styles.module.css";

const NavigationLink = ({
                            to,
                            children
                        }) => {
    return (
        <NavLink
            to={to}
            className={clsx(styles.header__navigationLink)}
        >
            {children}
        </NavLink>
    );
};

NavigationLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.elementType.isRequired,
};

export default NavigationLink;
