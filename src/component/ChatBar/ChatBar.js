import React, { useState, useEffect } from "react";
import styles from "./ChatBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faComment,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { auth, firestore } from "./../../firebase/firebase";

export default function ChatBar({ name, id , setLoading }) {
  const [state, setstate] = useState(false);
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState(
    "guest" + Math.floor(Math.random() * 9999)
  );

  useEffect(() => {
    setLoading(true)
    const sessionRef = firestore.collection("session").doc(id);
    const chatRef = sessionRef.collection("chat");
    const query = chatRef.orderBy("time", "desc").limit(16);
    query.get().then((docs) => {
      let tempList = [];
      docs.forEach((doc) => {
        if (doc.id != "lastMessage") tempList = [...tempList, doc.data()];
      });
      setChat(tempList);
      setLoading(false)
    });

    chatRef.doc("lastMessage").onSnapshot((doc) => {
      query.get().then((docs) => {
        let tempList = [];
        docs.forEach((doc) => {
          if (doc.id != "lastMessage") tempList = [...tempList, doc.data()];
        });
        setChat(tempList);
      });
    });

    auth.onAuthStateChanged((user) => {
      if (user) {
        firestore
          .collection("users")
          .doc(user.uid)
          .get()
          .then((data) => {
            setUserName(data.data().displayName.split(" ")[0]);
          });
      }
    });
  }, []);

  const sendMessage = () => {
    if (message == "") return;
    let temp = {
      name: userName,
      message: message,
      time: new Date().valueOf(),
    };
    setChat([temp, ...chat]);
    setMessage("");
    const sessionRef = firestore.collection("session").doc(id);
    const chatRef = sessionRef.collection("chat");
    chatRef.add(temp).then((_) => {
      chatRef.doc("lastMessage").set(temp);
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <div className={styles.chatIcon} onClick={() => setstate(true)}>
        <FontAwesomeIcon icon={faComment} />
      </div>

      <div
        className={`${styles.container} ${
          state ? styles.containerMobileShow : styles.containerMobileHide
        }`}
      >
        <div className={styles.header}>
          <div className={styles.headerBack} onClick={() => setstate(false)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className={styles.headerName}>{name}</div>
          <div className={styles.headerInfo}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
        </div>

        <div className={styles.chatContent}>
          {chat.map((value, index) => {
            return (
              <div className={styles.chat} key={index}>
                <div className={styles.chatName}>{value.name}</div>
                <div className={styles.message}>{value.message}</div>
              </div>
            );
          })}
        </div>

        <div className={styles.input}>
          <input
            placeholder="send some message.."
            value={message}
            onKeyDown={handleKeyDown}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className={styles.btn} onClick={sendMessage}>
            send
          </div>
        </div>
      </div>
    </>
  );
}
