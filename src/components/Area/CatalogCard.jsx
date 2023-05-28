import { HeartOutlined } from "@ant-design/icons";
import { Button, Rate } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Photo from "./Photo.jpg";
import { ReactComponent as Architecture } from "./arhitrcura.svg";
import { ReactComponent as Art } from "./art.svg";
import { ReactComponent as CustomerService } from "./customer-service.svg";
import { ReactComponent as Design } from "./design.svg";
import { ReactComponent as Game } from "./game.svg";
import { ReactComponent as Ispolnitelskoe } from "./ispolnitelskoe.svg";
import { ReactComponent as IzdatelskoeDelo } from "./izdatelskoe_delo.svg";
import { ReactComponent as Moda } from "./moda.svg";
import { ReactComponent as Movie } from "./movie.svg";
import { ReactComponent as Reklama } from "./reklama.svg";
import { ReactComponent as Location } from "./Location.svg";
import styles from "./catalogCard.module.css";

const getAreaIcon = (type) => {
    switch (type) {
        case "arhitrcura":
            return <Architecture />;
        case "art":
            return <Art />;
        case "customer-service":
            return <CustomerService />;
        case "design":
            return <Design />;
        case "game":
            return <Game />;
        case "ispolnitelskoe":
            return <Ispolnitelskoe />;
        case "izdatelskoe_delo":
            return <IzdatelskoeDelo />;
        case "moda":
            return <Moda />;
        case "movie":
            return <Movie />;
        case "reklama":
            return <Reklama />;
        default:
            return <CustomerService />;
    }
};

const CatalogCard = ({ area, showPrice }) => {
    const handleFavouritesClick = (event) => {
        event.stopPropagation();
        console.dir(event);
    };

    return (
        <div className={styles.catalogCard}>
            <div className={styles.catalogCard__imageContainer}>
                <Link to={`/area/${area.arealld}`}>
                    <img className={styles.catalogCard__image} src={Photo} alt="" />
                </Link>
                <Button
                    type="text"
                    size="small"
                    className={styles.catalogCard__favourites}
                    onClick={handleFavouritesClick}
                >
                    <HeartOutlined />
                </Button>
            </div>
            <div>
                <div className={styles.catalogCard__mainInfo}>
                    <div>
                        <h2 className={styles.catalogCard__title}>
                            <Link
                                to={`/area/${area.arealld}`}
                                className={styles.catalogCard__title}
                            >
                                {getAreaIcon(area.industry)} Студия Звукозаписи
                            </Link>
                        </h2>
                        <p className={styles.catalogCard__address}>
                            <Location />
                            Г. Москва, улица Ленина, дом 15, помещение 35
                        </p>
                    </div>
                    <div>
                        <Rate rootClassName={styles.catalogCard__rate} disabled defaultValue={3} />
                        <p className={styles.catalogCard__testimonials}>262 отзыва</p>
                    </div>
                </div>
                <div className={styles.catalogCard__descInfo}>
                    <div className={styles.catalogCard__services}>
                        <p className={styles.catalogCard__service}>
                            <CustomerService /> Услуга
                        </p>
                        <p className={styles.catalogCard__service}>
                            <CustomerService /> Услуга
                        </p>
                        <p className={styles.catalogCard__service}>
                            <CustomerService /> Услуга
                        </p>
                        <p className={styles.catalogCard__service}>
                            <CustomerService /> Услуга
                        </p>
                        <p className={styles.catalogCard__service}>
                            <CustomerService /> Услуга
                        </p>
                        <p className={styles.catalogCard__service}>
                            <CustomerService /> Услуга
                        </p>
                        <p className={styles.catalogCard__service}>
                            <CustomerService /> Услуга
                        </p>
                        <p className={styles.catalogCard__service}>
                            <CustomerService /> Услуга
                        </p>
                    </div>
                    <div>
                        {showPrice ? (
                            <p className={styles.catalogCard__price}>2 500 ₽</p>
                        ) : (
                            <Link to="/sign-in" className={styles.catalogCard__signIn}>
                                Узнать стоимость
                            </Link>
                        )}
                        <p className={styles.catalogCard__priceNote}>за час</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

CatalogCard.propTypes = {
    area: PropTypes.instanceOf(Object).isRequired,
    showPrice: PropTypes.bool.isRequired,
};

export default CatalogCard;
