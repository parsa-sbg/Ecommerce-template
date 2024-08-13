import { useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import Page404 from "./pages/Page404"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '*',
            element: <Page404 />
        }
    ])

    return routes
}