import React from 'react'
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,
         faPodcast,
         faRandom,
         faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import Switch from '../Switch/Switch'

export default function Navbar() {

    return (
        <div className={styles.container}>
            <div className={styles.Logo}>
                fangAraiDee
            </div>
            <div className={styles.containerLink}>
                <div className={styles.navLink}>
                    <div className={styles.navLinkIcon}>
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <div className={styles.navLinkText}>
                        Home
                    </div>
                </div>
                <div className={styles.navLink}>
                    <div className={styles.navLinkIcon}>
                        <FontAwesomeIcon icon={faPodcast} />
                    </div>
                    <div className={styles.navLinkText}>
                        Podcast
                    </div>
                </div>
                <div className={styles.navLink}>
                    <div className={styles.navLinkIcon}>
                        <FontAwesomeIcon icon={faRandom} />
                    </div>
                    <div className={styles.navLinkText}>
                        Random
                    </div>
                </div>
                <div className={styles.navLinkHide}>
                    <div className={styles.navLinkIcon}>
                        <FontAwesomeIcon icon={faSignInAlt} />
                    </div>
                    <div className={styles.navLinkText}>
                        Login
                    </div>
                </div>
                <div className={styles.switch}>
                    <div className={styles.userLoginMobile}> 
                        <FontAwesomeIcon icon={faSignInAlt} />
                        Login
                    </div>
                    <Switch />
                </div>
            </div>
        </div>
    )
}
