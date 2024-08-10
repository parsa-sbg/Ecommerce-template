import { useRoutes } from "react-router-dom"
import Home from "./pages/Home"

export default function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '*',
            element: <div>404 page</div>
        }
    ])

    return routes
}