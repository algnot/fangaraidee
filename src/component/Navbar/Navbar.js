import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPodcast,
  faRandom,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Switch from "../Switch/Switch";
import { Link } from "react-router-dom";
import Login from "./../Login/Login";
import { auth, firestore } from "../../firebase/firebase";
import UserMenu from "../UserMenu/UserMenu";

export default function Navbar() {
  const [loginState, setLoginState] = useState(false);
  const [userMenuShow , setUserMenuShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [userInfo , setUserInfo] = useState(null);

  const displayLogin = () => {
    setLoginState(!loginState);
  };

  const displayUser = () => {
    setUserMenuShow(!userMenuShow)
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        firestore.collection("users").doc(user.uid)
        .onSnapshot(data => {
          if(data.data()){
            setUserName(data.data().displayName.split(" ")[0]);
            setUserInfo(data.data())
          } 
        })
      }
    })
  }, []);

  return (
    <>
      {loginState && !userName && <Login display={displayLogin} />}
      {userMenuShow && userName && <UserMenu user={userInfo} display={displayUser} />}
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
          <Link to="/">
            <div className={styles.navLink}>
              <div className={styles.navLinkIcon}>
                <FontAwesomeIcon icon={faPodcast} />
              </div>
              <div className={styles.navLinkText}>Podcast</div>
            </div>
          </Link>
          <Link to="/">
            <div className={styles.navLink}>
              <div className={styles.navLinkIcon}>
                <FontAwesomeIcon icon={faRandom} />
              </div>
              <div className={styles.navLinkText}>Random</div>
            </div>
          </Link>

          {!userName ? (
            <div className={styles.navLinkHide} onClick={displayLogin}>
              <div className={styles.navLinkIcon}>
                <FontAwesomeIcon icon={faSignInAlt} />
              </div>
              <div className={styles.navLinkText}>Login</div>
            </div>
          ) : (
            <div className={styles.navLinkHide} onClick={displayUser}>
              <div className={styles.navLinkIcon}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={styles.navLinkText}>{userName}</div>
            </div>
          )}

          {!userName ? (
            <div className={styles.switch}>
              <div className={styles.userLoginMobile} onClick={displayLogin}>
                <FontAwesomeIcon icon={faSignInAlt} />
                Login
              </div>
              <Switch />
            </div>
          ) : (
            <div className={styles.switch}>
              <div className={styles.userLoginMobile} onClick={displayUser}>
              {userName}
              </div>
              <Switch />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
