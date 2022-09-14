import { RouteProps } from "react-router-dom";
import Home from "../../../components/public/home/Home";
import About from "../../../components/public/about/About";

const publicRoutes: RouteProps[] = [
    {
        path:"/",
        component:Home
    },
]
export default publicRoutes;