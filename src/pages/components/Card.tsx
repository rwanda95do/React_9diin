import React from 'react'
import styles from "./Card.module.scss"
import { CardDTO } from '../index/types/card'

// 구조분해 할당 
interface Props {
    data: CardDTO
}

function Card({data}:Props) {
    const openDialog = ()=>{
        console.log("함수호출")
    }

  return (
    <div className={styles.card} onClick={openDialog}>
        <img className={styles.card__image} src={data.urls.small} alt={data.alt_description} />
    </div>
  )
}

export default Card
