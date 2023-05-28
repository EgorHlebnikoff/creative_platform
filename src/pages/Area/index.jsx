import { InfoCircleFilled } from "@ant-design/icons";
import { Alert, Button, Layout, Rate } from "antd";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as CustomerService } from "../../assets/industry/customer-service.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as Like } from "./like.svg";
import { ReactComponent as Dislike } from "./dislike.svg";
import { useGetCreativeAreaByIdQuery } from "../../services/api.js";
import { selectCurrentArea } from "../../store/creativeArea/index.js";
import { selectCurrentUser } from "../../store/user/index.js";
import Header from "../../components/Layout/Header/index.jsx";
import getAreaAddress from "../../utils/getAreaAddress.js";
import getAreaImage from "../../utils/getAreaImage.js";
import getAreaIndustryIcon from "../../utils/getAreaIndustryIcon.jsx";
import Avatar from "./Avatar.jpg";
import styles from "./styles.module.css";

const { Content } = Layout;

const AreaPage = () => {
    const { id } = useParams();

    useGetCreativeAreaByIdQuery(id);

    const user = useSelector(selectCurrentUser);
    const area = useSelector(selectCurrentArea);

    const [logo, setLogo] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLogo(await getAreaImage(area.logoId));
        };

        fetchData();
    }, [area]);

    return (
        <Layout>
            <Header user={user} />
            <Content className={styles.area}>
                {area && (
                    <>
                        <div className={styles.area__info}>
                            <div className={styles.area__titleContainer}>
                                <h1 className={styles.area__title}>
                                    {getAreaIndustryIcon(area.industry)} {area.name}
                                </h1>
                                <Rate rootClassName={styles.area__rate} disabled defaultValue={3} />
                                <p className={styles.area__testimonials}>(262 отзыва)</p>
                            </div>
                            <p className={styles.area__address}>
                                <Location />
                                {getAreaAddress(area)}
                            </p>
                        </div>
                        <div className={styles.area__content}>
                            <div className={styles.area__main}>
                                <h2 className={styles.area__subtitle}>Описание</h2>
                                <div className={styles.area__divider} />
                                <p className={styles.area__description}>
                                    {area?.description ?? ""}
                                </p>
                                <h2 className={styles.area__subtitle}>Стоимость</h2>
                                <div className={styles.area__divider} />
                                <Alert
                                    className={styles.area__hiddenPriceAlert}
                                    message="Чтобы узнать стоимость, зарегистрируйтесь в АКИ"
                                    type="error"
                                    showIcon
                                    icon={<InfoCircleFilled />}
                                />
                                <h2 className={styles.area__subtitle}>Предоставляемые услуги</h2>
                                <div className={styles.area__divider} />
                                <div className={styles.area__services}>
                                    <p className={styles.area__service}>
                                        <CustomerService /> Услуга
                                    </p>
                                    <p className={styles.area__service}>
                                        <CustomerService /> Услуга
                                    </p>
                                    <p className={styles.area__service}>
                                        <CustomerService /> Услуга
                                    </p>
                                    <p className={styles.area__service}>
                                        <CustomerService /> Услуга
                                    </p>
                                    <p className={styles.area__service}>
                                        <CustomerService /> Услуга
                                    </p>
                                    <p className={styles.area__service}>
                                        <CustomerService /> Услуга
                                    </p>
                                    <p className={styles.area__service}>
                                        <CustomerService /> Услуга
                                    </p>
                                    <p className={styles.area__service}>
                                        <CustomerService /> Услуга
                                    </p>
                                </div>
                                <h2
                                    className={clsx(
                                        styles.area__subtitle,
                                        styles.area__subtitle_rate,
                                    )}
                                >
                                    <span>
                                        Отзывы{" "}
                                        <span className={styles.area__testimonials}>(262)</span>
                                    </span>
                                    <Rate
                                        rootClassName={styles.area__rate}
                                        disabled
                                        defaultValue={3}
                                    />
                                </h2>
                                <div className={styles.area__divider} />
                                <div className={styles.area__testimonialsContainer}>
                                    <div className={styles.area__testimonial}>
                                        <img
                                            className={styles.area__testimonialAvatar}
                                            src={Avatar}
                                            alt=""
                                        />
                                        <div>
                                            <h4 className={styles.area__testimonialTitle}>
                                                Han Solo <span>1 day ago</span>
                                            </h4>
                                            <p className={styles.area__testimonialDesc}>
                                                We supply a series of design principles, practical
                                                patterns and high quality design resources (Sketch
                                                and Axure), to help people create their product
                                                prototypes beautifully and efficiently.
                                            </p>
                                            <p className={styles.area__testimonialLikes}>
                                                <span>
                                                    <Like /> 0
                                                </span>
                                                <span>
                                                    <Dislike /> 0
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.area__testimonial}>
                                        <img
                                            className={styles.area__testimonialAvatar}
                                            src={Avatar}
                                            alt=""
                                        />
                                        <div>
                                            <h4 className={styles.area__testimonialTitle}>
                                                Han Solo <span>1 day ago</span>
                                            </h4>
                                            <p className={styles.area__testimonialDesc}>
                                                We supply a series of design principles, practical
                                                patterns and high quality design resources (Sketch
                                                and Axure), to help people create their product
                                                prototypes beautifully and efficiently.
                                            </p>
                                            <p className={styles.area__testimonialLikes}>
                                                <span>
                                                    <Like /> 0
                                                </span>
                                                <span>
                                                    <Dislike /> 0
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.area__testimonial}>
                                        <img
                                            className={styles.area__testimonialAvatar}
                                            src={Avatar}
                                            alt=""
                                        />
                                        <div>
                                            <h4 className={styles.area__testimonialTitle}>
                                                Han Solo <span>1 day ago</span>
                                            </h4>
                                            <p className={styles.area__testimonialDesc}>
                                                We supply a series of design principles, practical
                                                patterns and high quality design resources (Sketch
                                                and Axure), to help people create their product
                                                prototypes beautifully and efficiently.
                                            </p>
                                            <p className={styles.area__testimonialLikes}>
                                                <span>
                                                    <Like /> 0
                                                </span>
                                                <span>
                                                    <Dislike /> 0
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.area__aside}>
                                {logo && <img className={styles.area__image} src={logo} alt="" />}
                                <div className={styles.area__buttons}>
                                    <Button className={styles.area__button}>
                                        <Link to="/sign-in">Войти</Link>
                                    </Button>
                                    <Button className={styles.area__button} type="primary">
                                        <Link to="/sign-up">Зарегистрироваться</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Content>
        </Layout>
    );
};

export default AreaPage;
