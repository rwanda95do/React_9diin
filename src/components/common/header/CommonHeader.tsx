import React from 'react'
import styles from './CommonHeader.module.scss'

function CommonHeader() {
  return (
    <header className={styles.header}>
        <div className={styles.header__logoBox}>
            <img className={styles.header__logoBox__logo} src="src/assets/images/image-logo.png" alt="" />
            <span className={styles.header__logoBox__title}>PhotoSplash</span>
        </div>
        <div className={styles.header__profileBox}>
            <button className={styles.header__profileBox__button}>사진제출</button>
            <button className={styles.header__profileBox__button}>북마크</button>
            <span className={styles.header__profileBox__userName}>9Din | 9Din@mgmail.com</span>
        </div>
    </header>
  )
}

export default CommonHeader
