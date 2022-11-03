import { IRegister } from "../models/register";
import axios from "axios";


const Account = {
    register : (values : IRegister): Promise<IRegister> => axios.post('http://127.0.0.1:8000/register', values),
}

export default Account;