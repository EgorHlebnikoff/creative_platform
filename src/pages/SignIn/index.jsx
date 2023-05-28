import { Button, Form, Input, Layout, notification } from "antd";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/api.js";
import styles from "./styles.module.css";

const { Content } = Layout;

const SignInPage = () => {
    const navigate = useNavigate();

    const [signIn, { isLoading }] = useLoginMutation();

    const onSubmit = async (formData) => {
        try {
            await signIn(formData).unwrap();
            navigate("/");
        } catch (err) {
            console.error(err);

            if (err?.status === 401) {
                notification.error({
                    duration: 10,
                    message: "Неверные данные авторизации",
                });
            }

            if (err?.status >= 500) {
                notification.error({
                    duration: 10,
                    message: "Не удалось авторизоваться",
                });
            }
        }
    };

    return (
        <Layout>
            <Content className={clsx(styles.signin)}>
                <div className={clsx(styles.signin__formContainer)}>
                    <div className={clsx(styles.signin__formHeader)}>
                        <h1 className={clsx(styles.signin__formTitle)}>Вход</h1>
                        <Link to="/sign-up" className={clsx(styles.signin__link)}>
                            Зарегистрироваться
                        </Link>
                    </div>
                    <Form
                        name="signin"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={onSubmit}
                    >
                        <Form.Item
                            className={clsx(styles.signin__item)}
                            label="Телефон или электронная почта"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Пожалуйста, введите почту или телефон",
                                },
                            ]}
                        >
                            <Input rootClassName={clsx(styles.signin__input)} />
                        </Form.Item>
                        <Form.Item
                            className={clsx(styles.signin__item)}
                            label="Пароль"
                            name="password"
                            rules={[{ required: true, message: "Пожалуйста введите пароль" }]}
                        >
                            <Input.Password
                                type="password"
                                rootClassName={clsx(styles.signin__input)}
                            />
                        </Form.Item>

                        <Form.Item className={clsx(styles.signin__item)}>
                            <Button
                                loading={isLoading}
                                type="primary"
                                htmlType="submit"
                                className={clsx(styles.signin__submitbtn)}
                            >
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                    <Link
                        to="/"
                        className={clsx(styles.signin__link, styles.signin__link_fullWidth)}
                    >
                        Восстановить пароль
                    </Link>
                </div>
            </Content>
        </Layout>
    );
};

export default SignInPage;
