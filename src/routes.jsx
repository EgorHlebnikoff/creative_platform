import { createBrowserRouter } from "react-router-dom";
import AreaPage from "./pages/Area";
import IndexPage from "./pages/Index";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
    },
    {
        path: "/sign-in",
        element: <SignInPage />,
    },
    {
        path: "/sign-up",
        element: <SignUpPage />,
    },
    {
        path: "/area/:id",
        element: <AreaPage />,
    },
]);

export default router;
