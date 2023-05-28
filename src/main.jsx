import { App, ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./App.jsx";
import "./fonts.css";
import "./index.css";
import "dayjs/locale/ru";
import locale from "antd/locale/ru_RU";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ConfigProvider
            locale={locale}
            theme={{
                token: {
                    colorBgBase: "#182330",
                    colorBgContainer: "#1B283D",
                    colorPrimary: "#D55065",
                    colorTextBase: "#FFFFFF",
                    fontFamily:
                        "Cera Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                    fontSize: 14,
                    controlHeight: 48,
                },
            }}
        >
            <App className="app">
                <MyApp />
            </App>
        </ConfigProvider>
    </React.StrictMode>,
);
