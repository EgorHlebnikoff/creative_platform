import clsx from "clsx";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import avatar from "../../../assets/avatar.jpg";
import {ReactComponent as Notifications} from "../../../assets/notifications.svg";
import styles from "./styles.module.css";

const User = ({userName}) => {
    return (
        <div className={clsx(styles.header__user)}>
            <Link to="/" className={clsx(styles.header__notifications)}>
                <Notifications />
                <span>11</span>
            </Link>
            <Link to="/" className={clsx(styles.header__userLink)}>
                <img src={avatar} alt="Ваш аватар" width={32} height={32} className={clsx(styles.header__userAvatar)} />
                {userName}
            </Link>
        </div>
    );
};

User.propTypes = {
    userName: PropTypes.string.isRequired,
};

export default User;
