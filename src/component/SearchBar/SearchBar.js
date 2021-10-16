import React from "react";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,
         faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return ( 
    <div className={styles.joinRoom}>
      <div className={styles.searchBar}>
        <div className={styles.searchRoom}>
          <input placeholder="Enter room ID to join." />
          <div className={styles.searchIcon}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div className={styles.createRoomBtn}>
          <div className={styles.mobileHide}>
            Create session 
          </div>
          <FontAwesomeIcon icon={faPlus}/>
        </div>
      </div> 
    </div>
  );
}
