import { SearchOutlined } from "@ant-design/icons";
import { DatePicker, Input, Select, TimePicker } from "antd";
import clsx from "clsx";
import { useState } from "react";
import styles from "./filters.module.css";

const Filters = () => {
    const [industry, setIndustry] = useState(undefined);
    const [bookingDate, setBookingDate] = useState(undefined);
    const [startTime, setStartTime] = useState(undefined);
    const [endTime, setEndTime] = useState(undefined);
    const [search, setSearch] = useState("");

    const onIndustryChange = (value) => {
        setIndustry(value);
    };

    const onBookingDateChange = (value) => {
        setBookingDate(value);
    };

    const onStartTimeChange = (value) => {
        setStartTime(value);
    };

    const onEndTimeChange = (value) => {
        setEndTime(value);
    };

    const onSearchChange = ({ target: { value } }) => {
        setSearch(value);
    };

    return (
        <div className={styles.filters}>
            <div className={styles.filters__main}>
                <div className={clsx(styles.filters__group, styles.filters__group_industry)}>
                    <span>Индустрия</span>
                    <Select
                        className={styles.filters__select}
                        onChange={onIndustryChange}
                        value={industry}
                        placeholder="Выберите из списка"
                    >
                        <Select.Option value="Арт">Арт</Select.Option>
                        <Select.Option value="Архитектура">Архитектура</Select.Option>
                        <Select.Option value="Видеоигры и ПО">Видеоигры и ПО</Select.Option>
                        <Select.Option value="Дизайн">Дизайн</Select.Option>
                        <Select.Option value="Издательское дело и новые медиа">
                            Издательское дело и новые медиа
                        </Select.Option>
                        <Select.Option value="Исполнительские искусства">
                            Исполнительские искусства
                        </Select.Option>
                        <Select.Option value="Кино и анимация">Кино и анимация</Select.Option>
                        <Select.Option value="Мода">Мода</Select.Option>
                        <Select.Option value="Музыка">Музыка</Select.Option>
                        <Select.Option value="Реклама">Реклама</Select.Option>
                    </Select>
                </div>
                <div className={clsx(styles.filters__group, styles.filters__group_bookingDate)}>
                    <span>Дата бронирования</span>
                    <DatePicker
                        placeholder="Сегодня"
                        className={styles.filters__picker}
                        onChange={onBookingDateChange}
                        value={bookingDate}
                        format="DD.MM.YYYY"
                    />
                </div>
                <div className={clsx(styles.filters__group, styles.filters__group_timeRange)}>
                    <span>Начало</span>
                    <TimePicker
                        className={styles.filters__picker}
                        popupClassName={styles.filters__pickerDropdown}
                        format="HH:mm"
                        onChange={onStartTimeChange}
                        value={startTime}
                    />
                </div>
                <div className={clsx(styles.filters__group, styles.filters__group_timeRange)}>
                    <span>Окончание</span>
                    <TimePicker
                        className={styles.filters__picker}
                        popupClassName={styles.filters__pickerDropdown}
                        format="HH:mm"
                        onChange={onEndTimeChange}
                        value={endTime}
                    />
                </div>
            </div>
            <div className={clsx(styles.filters__group)}>
                <Input
                    rootClassName={styles.filters__input}
                    placeholder="Поиск площадки"
                    suffix={<SearchOutlined />}
                    value={search}
                    onChange={onSearchChange}
                />
            </div>
        </div>
    );
};

export default Filters;
