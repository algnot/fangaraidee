import React , { useEffect } from 'react'
import styles from './Login.module.css'
import { googleProvider , auth , facebookProvider, firestore } from './../../firebase/firebase'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Login({display}) {

    const googleLogin = async () => {
        const result = await auth.signInWithPopup(googleProvider);
        if(result) {
            const userRef = firestore.collection('users')
            .doc(result.user.uid)
            userRef.get().then((doc) => {
                if(!doc.data()){
                    userRef.set({
                        uid: result.user.uid,
                        displayName: result.user.displayName,
                        photoURL: result.user.photoURL,
                        email: result.user.email,
                        created: new Date().valueOf(),
                        role: 'user',
                        provider: 'google'
                    })
                }
            })
        }
    }

    const facebookLogin = async () => {
        const result = await auth.signInWithPopup(facebookProvider);
        if(result) {
            const userRef = firestore.collection('users')
            .doc(result.user.uid)
            userRef.get().then((doc) => {
                if(!doc.data()){
                    userRef.set({
                        uid: result.user.uid,
                        displayName: result.user.displayName,
                        photoURL: result.user.photoURL,
                        email: result.user.email,
                        created: new Date().valueOf(),
                        role: 'user',
                        provider: 'facebook'
                    })
                }
            })
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <div className={styles.loginHeader}>
                    <div className={styles.loginIcon}
                         onClick={display}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                    <div className={styles.loginTextHeader}>
                        fungAraiDee
                    </div>
                </div>

                <div className={styles.loginContent}>
                    <div className={styles.loginContentText}>
                        เลือก Service ที่ต้องการเข้าสู่ระบบ
                    </div>

                    <div className={styles.btnLogin}
                         onClick={googleLogin}>
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                        <div className={styles.btnLoginText}>Login ด้วย google</div>
                    </div>

                    <div className={styles.btnLogin}
                         onClick={facebookLogin} style={{marginTop:15}}>
                        <img src="https://img.icons8.com/color/48/000000/facebook-new.png"/>
                        <div className={styles.btnLoginText}>Login ด้วย facebook</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
