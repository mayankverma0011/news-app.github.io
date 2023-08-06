import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light " id='bg-color'>
  <div className="container" id='navbar'>
    {/* <a className="navbar-brand "id="text-color" href="#">NeWs</a> */}
    <h5>Ne<span>W</span>s</h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  grid text-center  ">
        <li className="nav-item">
          
          <NavLink to="/"  className="nav-link active "id="text-color" aria-current="page" >Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/general"   className="nav-link "id="text-color">General</NavLink>
        </li> */}
        <li className="nav-item">
        <NavLink to="/business"  className="nav-link "id="text-color">Business</NavLink>
        </li>
        
        <li className="nav-item">
        <NavLink to="/entertainment"   className="nav-link "id="text-color">Entertainment</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/health"  className="nav-link "id="text-color">Health</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/Sports"   className="nav-link "id="text-color">Sports</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/technology"   className="nav-link "id="text-color">Technology</NavLink>
        </li>
      </ul>
     
    </div>
</div>
</nav>
    
      </>
  )
}

export default Header