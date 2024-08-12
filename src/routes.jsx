import { useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import Page404 from "./pages/Page404"

export default function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '*',
            element: <Page404/>
        }
    ])

    return routes
}