import React from 'react';
import { Link, useLocation } from "react-router-dom";

/* activePage  | changePage-call-back */
function NavBar() {
  const location = useLocation();

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Stephanie Blom</Link>
      {/* <a class="navbar-brand" href="#" onClick={ function(){ props.changePage('AboutPage')} }>Pupster</a> */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
          </li>  
          <li className="nav-item">
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
              Portfolio
            </Link>
          </li>         
          <li className="nav-item">
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact
            </Link>
          </li>                  
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;