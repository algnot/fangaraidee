import React , {useState} from "react";
import styles from "./ChatBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, 
         faComment, 
         faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function ChatBar({ name, id }) {

  const [state, setstate] = useState(false)

  return (
    <>
      <div className={styles.chatIcon}
           onClick={() => setstate(true)}>
        <FontAwesomeIcon icon={faComment} />
      </div>

      <div className={`${styles.container} ${state ? styles.containerMobileShow: styles.containerMobileHide}`}>
        <div className={styles.header}>
          <div className={styles.headerBack}
               onClick={() => setstate(false)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className={styles.headerName}>{name}</div>
          <div className={styles.headerInfo}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
        </div>

        <div className={styles.chatContent}>
          <div className={styles.chat}>
            <div className={styles.chatName}>algnot</div>
            <div className={styles.message}>Hello world</div>
          </div>
          <div className={styles.chat}>
            <div className={styles.chatName}>algnot</div>
            <div className={styles.message}>Hello world</div>
          </div>
          <div className={styles.chat}>
            <div className={styles.chatName}>algnot</div>
            <div className={styles.message}>Hello world</div>
          </div>
        </div>
        <div className={styles.input}>
          <input placeholder="send some message.." />
          <div className={styles.btn}>send</div>
        </div>
      </div>
    </>
  );
}
