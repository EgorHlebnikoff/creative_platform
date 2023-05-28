import { HeartOutlined } from "@ant-design/icons";
import { Button, Rate } from "antd";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLazyGetCreativeAreaServicesQuery } from "../../services/api.js";
import getAreaAddress from "../../utils/getAreaAddress.js";
import getAreaImage from "../../utils/getAreaImage.js";
import { ReactComponent as CustomerService } from "../../assets/industry/customer-service.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import getAreaIndustryIcon from "../../utils/getAreaIndustryIcon.jsx";
import styles from "./catalogCard.module.css";

const CatalogCard = ({ area, showPrice }) => {
    const [getServices] = useLazyGetCreativeAreaServicesQuery();

    const [logo, setLogo] = useState("");

    const handleFavouritesClick = (event) => {
        event.stopPropagation();
    };

    useEffect(() => {
        const fetchData = async () => {
            setLogo(await getAreaImage(area.logoId));
            getServices(area.arealld);
        };

        fetchData();
    }, [area]);

    return (
        <div className={styles.catalogCard}>
            <div className={styles.catalogCard__imageContainer}>
                <Link to={`/area/${area.arealld}`}>
                    {logo && <img className={styles.catalogCard__image} src={logo} alt="" />}
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
                                {getAreaIndustryIcon(area.industry)} {area.name}
                            </Link>
                        </h2>
                        <p className={styles.catalogCard__address}>
                            <Location />
                            {getAreaAddress(area)}
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
