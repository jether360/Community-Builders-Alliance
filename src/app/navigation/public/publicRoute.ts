import { RouteProps } from "react-router-dom";
import Home from "../../../components/public/home/Home";


const publicRoutes: RouteProps[] = [
    {
        path:"/home",
        component:Home
    }
]
export default publicRoutes;