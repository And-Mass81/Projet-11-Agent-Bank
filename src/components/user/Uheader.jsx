import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { userService } from '../../_services/user.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

const Uheader = () => {
  let navigate = useNavigate()
  const logout =()=>{
    userService.logout() // i call logout function from service and i errase the token and redirect to home.
    navigate('/')
  }


    return (
        <div>
     <nav className="main-nav">
     <Link to="/" className="main-nav-logo" >
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
      <div>
        <a className="main-nav-item" href="./user.html">
        <FontAwesomeIcon icon={faCircleUser }></FontAwesomeIcon>
          Tony
        </a>
        <Link className="main-nav-item" onClick={logout} >
        <FontAwesomeIcon icon={faSignOut }></FontAwesomeIcon>
          Sign Out
        </Link>
      </div>
    </nav>
        </div>
    );
};

export default Uheader;