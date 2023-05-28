import { Button, Layout } from "antd";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import NavigationLink from "./NavigationLink.jsx";
import User from "./User.jsx";
import styles from "./styles.module.css";

const { Header: AntdHeader } = Layout;

const Header = ({ user }) => {
    const navigate = useNavigate();

    const goToSignIn = () => navigate("/sign-in");

    const getNavigation = (role) => {
        if (role === "renter") {
            return (
                <>
                    <NavigationLink to="/">Каталог площадок</NavigationLink>
                    <NavigationLink to="/booking">Мои бронирования</NavigationLink>
                    <NavigationLink to="/favourites">Избранное</NavigationLink>
                    <NavigationLink to="/contracts">Реестр договоров</NavigationLink>
                </>
            );
        }

        if (role === "admin") {
            return (
                <>
                    <NavigationLink to="/">Площадки</NavigationLink>
                    <NavigationLink to="/testimonials">Отзывы</NavigationLink>
                    <NavigationLink to="/users">Пользователи</NavigationLink>
                    <NavigationLink to="/contracts">Реестр договоров</NavigationLink>
                    <NavigationLink to="/services">Справочник услуг</NavigationLink>
                </>
            );
        }

        if (role === "landlord") {
            return (
                <>
                    <NavigationLink to="/">Мои площадки</NavigationLink>
                    <NavigationLink to="/booking">Запросы на бронирование</NavigationLink>
                    <NavigationLink to="/contracts">Реестр договоров</NavigationLink>
                </>
            );
        }

        return (
            <>
                <NavigationLink to="/">Каталог площадок</NavigationLink>
            </>
        );
    };

    return (
        <AntdHeader className={clsx(styles.header)}>
            <div className={clsx(styles.header__left)}>
                <div className={clsx(styles.header__logoContainer)}>
                    <Logo />
                </div>
                {getNavigation(user?.role)}
            </div>
            <div>
                {user && user.name ? (
                    <User userName={user.name} />
                ) : (
                    <Button type="text" style={{ lineHeight: "22px" }} onClick={goToSignIn}>
                        Вход/Регистрация
                    </Button>
                )}
            </div>
        </AntdHeader>
    );
};

Header.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        role: PropTypes.string,
    }),
};

export default Header;
