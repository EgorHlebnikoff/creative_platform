import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Layout, notification, Radio, Select, Upload } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation, useAddFileMutation } from "../../services/api.js";
import styles from "./styles.module.css";

const { Content } = Layout;

const getBase64 = (img) => {
    return new Promise((res) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => res(reader.result));
        reader.readAsDataURL(img);
    });
};

const SignUpPage = () => {
    const navigate = useNavigate();

    const [logoURL, setLogoURL] = useState("");
    const [logoId, setLogoId] = useState("");

    const [form] = Form.useForm();
    const roleValue = Form.useWatch("role", form);

    const [signUp, { isLoading }] = useSignUpMutation();
    const [loadDocument] = useAddFileMutation();

    const onSubmit = async (formData) => {
        try {
            await signUp({
                ...formData,
                username: formData.email,
                role: roleValue === "Renter" ? 2 : 1,
                logoId,
            }).unwrap();

            navigate("/");
        } catch (err) {
            console.error(err);

            if (err?.status >= 500) {
                notification.error({
                    duration: 10,
                    message: "Не удалось авторизоваться",
                });
            }
        }
    };

    const handleFileUpload = async (data) => {
        try {
            const formData = new FormData();
            formData.append("uploadedFile", data.file);

            setLogoId(await loadDocument(formData).unwrap());
            setLogoURL(await getBase64(data.file));
        } catch (err) {
            notification.error({
                duration: 10,
                message: "Не удалось загрузить логотип",
            });

            console.error(err);
        }
    };

    return (
        <Layout>
            <Content className={clsx(styles.signup)}>
                <div className={clsx(styles.signup__formContainer)}>
                    <div className={clsx(styles.signup__formHeader)}>
                        <h1 className={clsx(styles.signup__formTitle)}>Регистрация</h1>
                        <Link to="/sign-in" className={clsx(styles.signup__link)}>
                            Войти
                        </Link>
                    </div>
                    <Form
                        form={form}
                        name="signup"
                        layout="vertical"
                        initialValues={{ remember: true, role: "Renter" }}
                        onFinish={onSubmit}
                    >
                        <h2
                            className={clsx(
                                styles.signup__formTitle,
                                styles.signup__formTitle_smaller,
                            )}
                        >
                            Вы
                        </h2>
                        <div>
                            <Form.Item
                                className={clsx(styles.signup__item, styles.signup__item_radio)}
                                name="role"
                            >
                                <Radio.Group>
                                    <Radio value="Renter" className={clsx(styles.signup__radio)}>
                                        Арендатор
                                    </Radio>
                                    <Radio value="Landlord" className={clsx(styles.signup__radio)}>
                                        Арендодатель
                                    </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>

                        <h2
                            className={clsx(
                                styles.signup__formTitle,
                                styles.signup__formTitle_smaller,
                            )}
                        >
                            Личные данные
                        </h2>
                        <div>
                            <Form.Item
                                className={clsx(styles.signup__item)}
                                label="Фамилия"
                                name="surname"
                                rules={[
                                    { required: true, message: "Пожалуйста, введите Вашу фамилию" },
                                ]}
                            >
                                <Input rootClassName={clsx(styles.signup__input)} />
                            </Form.Item>
                            <Form.Item
                                className={clsx(styles.signup__item)}
                                label="Имя"
                                name="name"
                                rules={[
                                    { required: true, message: "Пожалуйста, введите Ваше имя" },
                                ]}
                            >
                                <Input rootClassName={clsx(styles.signup__input)} />
                            </Form.Item>
                            <Form.Item
                                className={clsx(styles.signup__item)}
                                label="Отчество"
                                name="middlename"
                            >
                                <Input rootClassName={clsx(styles.signup__input)} />
                            </Form.Item>
                            <Form.Item
                                className={clsx(styles.signup__item)}
                                label="Пароль"
                                name="password"
                                rules={[{ required: true, message: "Пожалуйста введите пароль" }]}
                            >
                                <Input.Password
                                    type="password"
                                    rootClassName={clsx(styles.signup__input)}
                                />
                            </Form.Item>
                        </div>

                        <h2
                            className={clsx(
                                styles.signup__formTitle,
                                styles.signup__formTitle_smaller,
                            )}
                        >
                            Контактные данные
                        </h2>
                        <div>
                            <Form.Item
                                className={clsx(styles.signup__item)}
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Пожалуйста, введите Ваш email",
                                    },
                                ]}
                            >
                                <Input rootClassName={clsx(styles.signup__input)} type="email" />
                            </Form.Item>
                            <Form.Item
                                className={clsx(styles.signup__item)}
                                label="Телефон"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: "Пожалуйста, введите Ваш номер телефона",
                                    },
                                ]}
                            >
                                <Input rootClassName={clsx(styles.signup__input)} type="phone" />
                            </Form.Item>
                        </div>

                        {roleValue === "Landlord" && (
                            <>
                                <h2
                                    className={clsx(
                                        styles.signup__formTitle,
                                        styles.signup__formTitle_smaller,
                                    )}
                                >
                                    Данные об организации
                                </h2>
                                <div>
                                    <Form.Item
                                        className={clsx(styles.signup__item)}
                                        label="Логотип"
                                    >
                                        <Upload
                                            listType="picture-card"
                                            accept="image/jpeg,image/jpg,image/png"
                                            customRequest={handleFileUpload}
                                            className={styles.signup__upload}
                                            showUploadList={false}
                                        >
                                            {logoURL ? (
                                                <img
                                                    src={logoURL}
                                                    alt="logo"
                                                    style={{
                                                        objectFit: "cover",
                                                        height: "100%",
                                                        width: "100%",
                                                    }}
                                                />
                                            ) : (
                                                <div>
                                                    <PlusOutlined />
                                                    <div style={{ marginTop: 8 }}>Загрузить</div>
                                                </div>
                                            )}
                                        </Upload>
                                    </Form.Item>
                                    <Form.Item
                                        className={clsx(styles.signup__item)}
                                        label="Название юридического лица"
                                        name="company"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Пожалуйста, введите название юридического лица",
                                            },
                                        ]}
                                    >
                                        <Input rootClassName={clsx(styles.signup__input)} />
                                    </Form.Item>
                                    <Form.Item
                                        className={clsx(styles.signup__item)}
                                        label="ИНН"
                                        name="inn"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Пожалуйста, введите Ваш ИНН",
                                            },
                                        ]}
                                    >
                                        <Input rootClassName={clsx(styles.signup__input)} />
                                    </Form.Item>
                                    <Form.Item
                                        className={clsx(styles.signup__item)}
                                        label="Индустрия"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Пожалуйста, выберите индустрию",
                                            },
                                        ]}
                                    >
                                        <Select
                                            placeholder="Выберите из списка"
                                            className={styles.signup__select}
                                            popupClassName={styles.signup__selectDropdown}
                                        >
                                            <Select.Option value="Арт">Арт</Select.Option>
                                            <Select.Option value="Архитектура">
                                                Архитектура
                                            </Select.Option>
                                            <Select.Option value="Видеоигры и ПО">
                                                Видеоигры и ПО
                                            </Select.Option>
                                            <Select.Option value="Дизайн">Дизайн</Select.Option>
                                            <Select.Option value="Издательское дело и новые медиа">
                                                Издательское дело и новые медиа
                                            </Select.Option>
                                            <Select.Option value="Исполнительские искусства">
                                                Исполнительские искусства
                                            </Select.Option>
                                            <Select.Option value="Кино и анимация">
                                                Кино и анимация
                                            </Select.Option>
                                            <Select.Option value="Мода">Мода</Select.Option>
                                            <Select.Option value="Музыка">Музыка</Select.Option>
                                            <Select.Option value="Реклама">Реклама</Select.Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item
                                        className={clsx(styles.signup__item)}
                                        label="Ваша должность"
                                        name="position"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Пожалуйста, введите Вашу должность",
                                            },
                                        ]}
                                    >
                                        <Input rootClassName={clsx(styles.signup__input)} />
                                    </Form.Item>
                                </div>
                            </>
                        )}

                        <div>
                            <Form.Item className={clsx(styles.signup__item)}>
                                <Button
                                    loading={isLoading}
                                    type="primary"
                                    htmlType="submit"
                                    className={clsx(styles.signup__submitbtn)}
                                >
                                    Зарегистрироваться
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </Content>
        </Layout>
    );
};

export default SignUpPage;
