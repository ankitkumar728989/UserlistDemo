import {BrowserRouter, Route,Routes} from "react-router-dom";
import Login from "../src/component/login/login";
import Userlist from "../src/component/user/userlist";
import Navbar from "./commonModule/Navbar/Navbar";
import Registration from "./component/Register/Registration";
import About from "./component/about/about"
import UserDetail from "./component/user/UserDetail";
export function Routing(){
    return(

!localStorage.getItem("token")?(
    <BrowserRouter>
    <Routes>
 <Route path="/" element={<Login/>} ></Route>
 <Route path="/Registration" element={<Registration/>}></Route>
 </Routes>
</BrowserRouter>
):(
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/user" element={<Userlist/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/user/UserDetail/:id"  element={<UserDetail/>}></Route>
   </Routes>
   </BrowserRouter>
)

    )
}
export default Routing;