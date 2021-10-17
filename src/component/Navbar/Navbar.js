import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPodcast,
  faRandom,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import Switch from "../Switch/Switch";
import { Link } from "react-router-dom";
import Login from './../Login/Login';

export default function Navbar() {

  const [loginState,setLoginState] = useState(false);

  const displayLogin = () => {
    setLoginState(!loginState);
  }

  return (
    <>
      {
        loginState && <Login display={displayLogin}/>
      }
      <div className={styles.container}>
        <div className={styles.Logo}>fangAraiDee</div>
        <div className={styles.containerLink}>
          <Link to="/">
            <div className={styles.navLink}>
              <div className={styles.navLinkIcon}>
                <FontAwesomeIcon icon={faHome} />
              </div>
              <div className={styles.navLinkText}>Home</div>
            </div>
          </Link>
          <Link to="/podcast">
            <div className={styles.navLink}>
              <div className={styles.navLinkIcon}>
                <FontAwesomeIcon icon={faPodcast} />
              </div>
              <div className={styles.navLinkText}>Podcast</div>
            </div>
          </Link>
          <Link to="/random">
            <div className={styles.navLink}>
              <div className={styles.navLinkIcon}>
                <FontAwesomeIcon icon={faRandom} />
              </div>
              <div className={styles.navLinkText}>Random</div>
            </div>
          </Link>

          <div className={styles.navLinkHide}
               onClick={displayLogin}>
            <div className={styles.navLinkIcon}>
              <FontAwesomeIcon icon={faSignInAlt} />
            </div>
            <div className={styles.navLinkText}>Login</div>
          </div>

          <div className={styles.switch}>
            <div className={styles.userLoginMobile}
                 onClick={displayLogin}>
              <FontAwesomeIcon icon={faSignInAlt} />
              Login
            </div>
            <Switch/>
          </div>

        </div>
      </div>
    </>
  );
}
