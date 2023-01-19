import React, { useContext, useState } from 'react'
import { doc, setDoc } from 'firebase/firestore';
import styles from './Card.module.scss';

function Card(props) {
  const [title, setTitle] = useState(props.data.title)
  const [clickListener, setclickListener] = useState(false)

  const onChangeCardTitle = (e) => {
    setTitle(e.target.value)

    if (clickListener === false) {
      setclickListener(true)

      const body = document.getElementsByTagName('body')[0];

      const listener = function (event) {
        // updateTitle(id, title)
        body.removeEventListener("click", listener, false);
      };

      body.addEventListener("click", listener, false);
    }

  }

  // const updateTitle = (id, title) => {
  //   setDoc(
  //     doc(db, "cards", id), {title: title}
  //   );
  // }

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
        <input onChange={(e) => onChangeCardTitle(e)} type="email" className="form-control" placeholder="Card name" value={title} />
      </div>
    </div>
  )
}

export default Card 