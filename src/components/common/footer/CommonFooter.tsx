import React from 'react'

import styles from "./CommonFooter.module.scss"

function CommonFooter() {
  return (
    <footer className={styles.footer}>
        <div className={styles.pagination}>
            <button className={styles.pagination__button}>
                <img src="/src/assets/icons/icon-arrowLeft.svg" alt="왼쪽화살표" />
            </button>
            {/* 변경될 UI 부분 */}
            <span>1</span>
            <button className={styles.pagination__button}>
                <img src="/src/assets/icons/icon-arrowRight.svg" alt="오른쪽쪽화살표" />
            </button>
        </div>
    </footer>
  )
}

export default CommonFooter
