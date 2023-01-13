import React from 'react'
import styles from './Card.module.scss'

function Card() {
  return (
    <div className={`${styles.wrapper} d-flex flex-column bg-light me-3 mb-3 p-3`}>
        Card title
    </div>
  )
}

export default Card