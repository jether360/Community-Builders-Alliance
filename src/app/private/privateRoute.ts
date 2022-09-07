import { RouteProps } from "react-router-dom";
import Home from "../../components/home/Home";
import CreateForm from "../../components/createForm/CreateForm";
import JoinForm from "../../components/joinForm/JoinForm";

const privateRoutes: RouteProps[] = [
    {
        path :"/",
        component: Home
    },
    {
        path:"/create/election",
        component:CreateForm
    },
    {
        path:"/join/election",
        component:JoinForm 
    },
 
]
export default privateRoutes;