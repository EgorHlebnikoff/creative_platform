import { Checkbox, InputNumber, Segmented, Space } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";
import CatalogCard from "../../../../components/Area/CatalogCard.jsx";
import { useGetAllCreativeAreaQuery } from "../../../../services/api.js";
import { selectAreas } from "../../../../store/creativeArea/index.js";
import Filters from "./Filters.jsx";
import styles from "./styles.module.css";

const catalogVariants = [
    {
        label: "Список",
        value: "list",
    },
    {
        label: "На карте",
        value: "map",
    },
];

const RenterCatalog = ({ showPrices }) => {
    useGetAllCreativeAreaQuery();

    const areas = useSelector(selectAreas);

    const [catalogVariant, setCatalogVariant] = useState(catalogVariants[0].value);

    const handleVariantChange = (newVariant) => {
        setCatalogVariant(newVariant);
    };

    return (
        <div className={styles.catalog}>
            <div className={styles.catalog__topPanel}>
                <h1 className={styles.catalog__title}>Креативные площадки</h1>
                <div className={styles.catalog__divider} />
                <Filters />
            </div>
            <div className={styles.catalog__content}>
                <div className={styles.catalog__aside}>
                    <div>
                        <Segmented
                            className={styles.catalog__variants}
                            size="default"
                            block
                            options={catalogVariants}
                            value={catalogVariant}
                            onChange={handleVariantChange}
                        />
                    </div>
                    <div className={styles.catalog__filters}>
                        <h3 className={styles.catalog__filtersTitle}>Дополнительные услуги</h3>
                        <div className={styles.catalog__filtersDivider} />
                        <Checkbox.Group
                            className={styles.catalog__filtersCheckbox}
                            options={[
                                { label: "Название услуги", value: "0" },
                                { label: "Название услуги", value: "1" },
                                { label: "Название услуги", value: "2" },
                                { label: "Название услуги", value: "3" },
                                { label: "Название услуги", value: "4" },
                                { label: "Название услуги", value: "5" },
                            ]}
                        />
                        {showPrices && (
                            <>
                                <h3 className={styles.catalog__filtersTitle}>Стоимость</h3>
                                <div className={styles.catalog__filtersDivider} />
                                <Space className={styles.catalog__filtersSpace}>
                                    <div>
                                        <span className={styles.catalog__filtersInputLabel}>
                                            От
                                        </span>
                                        <InputNumber
                                            className={styles.catalog__filtersInput}
                                            defaultValue={0}
                                            min={0}
                                            controls={false}
                                            formatter={(value) =>
                                                `${value} ₽`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                                            }
                                            parser={(value) => value.replace(/\D/g, "")}
                                        />
                                    </div>
                                    <div>
                                        <span className={styles.catalog__filtersInputLabel}>
                                            До
                                        </span>
                                        <InputNumber
                                            className={styles.catalog__filtersInput}
                                            defaultValue={100}
                                            min={0}
                                            max={100}
                                            controls={false}
                                            formatter={(value) =>
                                                `${value} ₽`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                                            }
                                            parser={(value) => value.replace(/\D/g, "")}
                                        />
                                    </div>
                                </Space>
                            </>
                        )}
                    </div>
                </div>
                <div style={{ width: "100%" }}>
                    {areas.map((area) => (
                        <CatalogCard key={area.arealld} area={area} showPrice={showPrices} />
                    ))}
                </div>
            </div>
        </div>
    );
};

RenterCatalog.propTypes = {
    showPrices: PropTypes.bool.isRequired,
};

export default RenterCatalog;
