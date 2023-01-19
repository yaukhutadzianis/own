import React, { useEffect, useState } from 'react'
import styles from './Card.module.scss'

function Card(props) {
  const [title, setTitle] = useState(props.data.title)

  const cardTitleOnChange = (e) => {
    setTitle(e.target.value)
  }

  // useEffect(() => {
  //   document.body.addEventListener('click', documentClickHandler);
  //   console.log('1')
  // }, [])

  // const documentClickHandler = () => {
  //   alert('clicked')
  // }

  return (
    <div className={`${styles.wrapper} d-flex flex-column bg-light me-3 mb-3 p-3`}>
      <div className="mb-3">
        <input onChange={(e) => cardTitleOnChange(e)} type="email" className="form-control" placeholder="Card name" value={title} />
      </div>
    </div>
  )
}

export default Card 