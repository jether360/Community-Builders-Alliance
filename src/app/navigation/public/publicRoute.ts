import { RouteProps } from "react-router-dom";
import Login from "../../../components/auth/Login";
import Test from "../../../components/test/Test";

const publicRoutes: RouteProps[] = [
    {
        path :"/login",
        component: Login
    },
    {
        path :"/test",
        component: Test
    },
 
]
export default publicRoutes;