import React from "react";
import styles from "./Home.module.css";
import SearchBar from './../SearchBar/SearchBar'
import ChatBar from "../ChatBar/ChatBar"

export default function Home({setLoading , id}) {
  return (
    <div className={styles.container}>
      <div className={styles.mainMenu}>
        <SearchBar/>
      </div>

      <div className={styles.globalChat}>
        <ChatBar name="Global Chat"
                 setLoading={setLoading}
                 id={id}/>
      </div>
    </div>
  );
}
