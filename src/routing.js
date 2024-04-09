import {Route,Routes} from "react-router-dom";
import Login from "../src/component/login/login";
import Userlist from "../src/component/user/userlist";
import Navbar from "./commonModule/Navbar/Navbar";
import Registration from "./component/Register/Registration";
import About from "./component/about/about"
export function Routing(){
    return(

!localStorage.getItem("token")?(
    <Routes>
 <Route path="/" Component={Login} ></Route>
 <Route path="/Registration" Component={Registration}></Route>
 </Routes>

):(
    <>
    <Navbar/>
    <Routes>
    <Route path="/user" Component={Userlist}></Route>
    <Route path="/About" Component={About}></Route>
   </Routes>
   </>
)

    )
}
export default Routing;