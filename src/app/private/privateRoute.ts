import { RouteProps } from "react-router-dom";
import Dashboard from "../../components/private/dashboard/Dashboard";

const privateRoutes: RouteProps[] = [
 {
    path:"/dashboard",
    component:Dashboard
 }
]
export default privateRoutes;