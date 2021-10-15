import React, { useState, useEffect } from "react";
import styles from "./Loading.module.css";

export default function Loading() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    setInterval(() => {
        setSecond(second => second+1)
    }, 500);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.textLoading}>ฟังอะไรดี {' '}
      {
        second%3 > 0 && ('.')
      }
      {
        second%3 > 1 && ('.')
      }
      </div>
    </div>
  );
}
