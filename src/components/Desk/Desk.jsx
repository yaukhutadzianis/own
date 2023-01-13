import React from 'react'
import Card from './Card/Card'
import styles from './Desk.module.scss'

function Desk() {
  const wrapperStyleBg = 'https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMGRlc2t8ZW58MHx8MHx8&w=1000&q=80';
  return (
    <div className={`${styles.wrapper} d-flex h-100 p-4`} style={{backgroundImage: `url(${wrapperStyleBg})`}}>
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Desk