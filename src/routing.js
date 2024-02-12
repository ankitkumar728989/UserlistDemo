import {BrowserRouter,Route,Routes} from "react-router-dom";
import login from "../src/component/login/login"
import user from "../src/component/user/userlist"

export function Routing(){
    return(
<BrowserRouter>
<Routes>
    <Route path="/" Component={login}></Route>
    <Route path="/user" Component={user}></Route>
</Routes>
</BrowserRouter>
    )
}
export default Routing;