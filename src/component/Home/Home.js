import React from "react";
import styles from "./Home.module.css";
import SearchBar from './../SearchBar/SearchBar'
import ChatBar from "../ChatBar/ChatBar";

export default function Home({setLoading}) {
  return (
    <div className={styles.container}>
      <div className={styles.mainMenu}>
        <SearchBar/>
      </div>

      <div className={styles.globalChat}>
        <ChatBar name="Global Chat"
                 setLoading={setLoading}
                 id="mTdG3yuGbp2GBUNMggMg"/>
      </div>
    </div>
  );
}
