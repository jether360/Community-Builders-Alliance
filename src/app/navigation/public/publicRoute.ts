import { RouteProps } from "react-router-dom";
import Home from "../../../components/public/home/Home";
import Register from "../../../components/public/register/Register";

const publicRoutes: RouteProps[] = [
    {
        path:"/",
        component:Home
    },
    {
        path:"/register",
        component:Register
    },
]
export default publicRoutes;