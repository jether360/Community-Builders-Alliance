import { RouteProps } from "react-router-dom";
import Dashboard from "../../components/private/dashboard/Dashboard";

const privateRoutes: RouteProps[] = [
 {
    path:"/user-info",
    component:Dashboard
 }
]
export default privateRoutes;