import React from 'react'
import style from "../banner/hero-banner.module.scss"
export const Audio = ({img, title, info, rating}) => {
  return (
    <div className={style.news_card}>
        <img src={img} alt="img" />
        <h3 className={style.news__title}>{title}</h3>
        <p>{info}</p>
        <img src={rating} alt="rating" />
    </div>
  )
}
