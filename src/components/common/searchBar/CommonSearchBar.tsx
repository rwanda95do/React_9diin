import React from 'react'
import styles from "./CommonSearchBar.module.scss"


function CommonSearchBar() {
  return (
    <div className={styles.searchBar}>
        <div className={styles.searchBar__search}>
            <input className={styles.searchBar__search__input} type="text" name="" id="" placeholder='찾으실 이미지를 검색하시오' />
            <img src="\src\assets\icons\icon-search.svg" alt="" />
        </div>
    </div>
  )
}

export default CommonSearchBar
