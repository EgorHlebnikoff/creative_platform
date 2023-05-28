import {theme} from "antd";
import {Provider as StoreProvider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import router from "./routes.jsx";
import {store} from "./store/index.js";

const {useToken} = theme;

function App() {
    const {token} = useToken();
    console.dir(token);

    return (
        <StoreProvider store={store}>
            <RouterProvider router={router} />
        </StoreProvider>
    )
}

export default App;
