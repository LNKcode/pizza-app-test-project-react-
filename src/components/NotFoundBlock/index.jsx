import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        <span>грустно конечно..</span>
        <br />
        Ничего не найдено =(
      </h1>
      <p className={styles.desc}>
        к сожалению Игорю лень делать эту страницу поэтому смотрите сюда
      </p>
    </div>
  );
};

export default NotFoundBlock;
