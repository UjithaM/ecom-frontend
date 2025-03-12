import {createBrowserRouter} from "react-router-dom";
import Layout from "@/layout/layout.tsx";
import NotFound from "@/page/not-found.tsx";
import App from "@/App.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout children={<App />} />,
        //TODO: create a 404 page for this
        errorElement : <NotFound />,
        children: [
            // {
            //     path: 'product',
            //     element: <Product />
            // }
        ]
    },

]);

export default router;