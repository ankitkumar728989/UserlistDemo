import { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
        <img width="50" height="50" src="https://img.icons8.com/ios/50/menu--v1.png" alt="menu--v1"/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/user">User</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li id="buttonItem">
              <button id="btn" onClick={handleLogout}>logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar