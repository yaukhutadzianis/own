import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import db from '../../db';
import { collection, getDocs } from 'firebase/firestore/lite';

import styles from './Desk.module.scss'

function Desk() {

    const wrapperStyleBg = 'https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMGRlc2t8ZW58MHx8MHx8&w=1000&q=80';

    const [cards, setCards] = useState([])

    async function getCards(db) {
        const cl = collection(db, 'cards')
        const querySnapshot = await getDocs(cl)
        let cardsList = []
        querySnapshot.docs.map((doc) => {
            cardsList.push({ id: doc.id, ...doc.data() })
        })
        setCards(cardsList)
    }

    useEffect(() => {
        // getCards(db)
        setCards([
            {
                "id": "FI8stOeKm4mdH3xFCjfu", 
                "title": "Card 2"
            },
            {
                "id": "rJDWKPUl9sbWu3JxC4VK",
                "title": "Card 1"
            },
        ])
    }, []);

    return (
        <div className={`${styles.wrapper} d-flex h-100 p-4`} style={{ backgroundImage: `url(${wrapperStyleBg})` }}>
            {cards.map((e) => 
                <Card data={e} key={e.id} />
            )}
        </div>
    )
}

export default Desk