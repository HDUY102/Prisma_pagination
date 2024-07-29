import React from 'react'
import style from "./Admin.module.css";

const cards = [
    {
        id: 1,
        title: 'Tổng doanh thu',
        total: 3
    },
    {
        id: 2,
        title: 'Tổng doanh thu',
        total: 3
    },
    {
        id: 3,
        title: 'Tổng doanh thu',
        total: 3
    },
]

const Card = () => {
  return (
    <div className={style.cardBoxContainer}>
        {cards.map((card) => (
            <div className={style.cardBox} key={card.id}>
                <h1>{card.title}</h1>
                $ {card.total}
            </div>
        ))}
    </div>
  )
}

export default Card