import React, { useState } from "react";
import styles from "./UserMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../../firebase/firebase";
import Loading from './../Loading/Loading';

export default function UserMenu({ display, user }) {
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [loading,setLoading] = useState(false);

  const signOut = () => {
    setConfirmLogout(true);
  };

  const logOut = () => {
    setLoading(true)
    auth.signOut()
    .then(() => {
        setLoading(false)
        display()
        window.location.reload()
    })
    .catch( _ => {
        setLoading(false)
        alert('can not sign out plese try again!')
    })
  }

  return (
    <>
      {loading && <Loading />}
      {!confirmLogout ? (
        <div className={styles.container}>
          <div className={styles.loginContainer}>
            <div className={styles.loginHeader}>
              <div className={styles.loginIcon} onClick={display}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <div className={styles.loginTextHeader}>fungAraiDee</div>
            </div>
            <div className={styles.loginContent}>
              <div className={styles.btnLogin} style={{ marginTop: 15 }}>
                <div className={styles.btnLoginText}>
                  โปรไฟล์ @{user.displayName.split(" ")[0]}
                </div>
              </div>

              <div
                className={styles.btnLogin}
                style={{ marginTop: 15 }}
                onClick={signOut}
              >
                <div className={styles.btnLoginText}>
                  ออกจากระบบ @{user.displayName.split(" ")[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.loginContainer}>
            <div className={styles.loginHeader}>
              <div className={styles.loginIcon} onClick={display}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <div className={styles.loginTextHeader}>ออกจากระบบ?</div>
            </div>
            <div className={styles.loginContent}>
              <div className={styles.btnLogin} 
                   style={{ marginTop: 15 }}
                   onClick={logOut}>
                <div className={styles.btnLoginText}>
                  ออกจากระบบ @{user.displayName.split(" ")[0]}
                </div>
              </div>

              <div className={styles.btnLogin}
                   style={{ marginTop: 15 }}
                   onClick={display}>
                <div className={styles.btnLoginText}>
                  ยกเลิก
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
