import {BrowserRouter,Route,Routes} from "react-router-dom";
import login from "../src/component/login/login"
import user from "../src/component/user/userlist"
import Navbar from "./commonModule/Navbar/Navbar";
export function Routing(){
    return(
<BrowserRouter>
<Navbar/>
<Routes>
    <Route path="/" Component={login}></Route>
    <Route path="/user" Component={user}></Route>
</Routes>
</BrowserRouter>
    )
}
export default Routing;