import React from "react";
import styles from "./Home.module.css";
import SearchBar from './../SearchBar/SearchBar'
import ChatBar from "../ChatBar/ChatBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.mainMenu}>
        <SearchBar/>
      </div>

      <div className={styles.globalChat}>
        <ChatBar name="Global Chat"
                 id="mTdG3yuGbp2GBUNMggMg"/>
      </div>
    </div>
  );
}
