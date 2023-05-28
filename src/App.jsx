import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routes.jsx";
import { store } from "./store/index.js";

function App() {
    return (
        <StoreProvider store={store}>
            <RouterProvider router={router} />
        </StoreProvider>
    );
}

export default App;
