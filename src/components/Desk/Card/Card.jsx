import React, { useEffect, useState } from 'react';
import db from '../../../db';
import { doc, setDoc, updateDoc } from 'firebase/firestore/lite';
import styles from './Card.module.scss';

function Card(props) {
  const [id, setId] = useState(props.data.id)
  const [title, setTitle] = useState(props.data.title)
  const [clickListener, setclickListener] = useState(false)
  const [bodyClicked, setBodyClicked] = useState(Date.now())

  const onChangeCardTitle = (e, id) => {
    setTitle(e.target.value)

    if (clickListener === false) {
      setclickListener(true)

      const body = document.getElementsByTagName('body')[0];

      const listener = (event) => {
        setBodyClicked(Date.now())
        body.removeEventListener("click", listener, false);
      };

      body.addEventListener("click", listener, false);
    }

  }

  useEffect(() => {
    if (title != props.data.title) {
      console.log('if effected')
      updateTitle();
      setclickListener(false);
      setBodyClicked(false)
    }
  }, [bodyClicked])

  const updateTitle = () => {
    const docRef = doc(db, "cards", id);
    const data = {
      title: title
    }
    updateDoc(docRef, data)
    .then(docRef => {
        console.log("A New Document Field has been added to an existing document");
    })
    .catch(error => {
        console.log(error);
    })
  }

  return (
    <div className={`${styles.wrapper} d-flex flex-column bg-light me-3 mb-3 p-3`}>
      <div className="mb-3">
        <input onChange={(e) => onChangeCardTitle(e, props.data.id)} type="email" className="form-control" placeholder="Card name" value={title} />
      </div>
    </div>
  )
}

export default Card 