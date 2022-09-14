import { RouteProps } from "react-router-dom";
import Home from "../../../components/public/home/Home";


const publicRoutes: RouteProps[] = [
    {
        path:"/",
        component:Home
    },
]
export default publicRoutes;