import React from 'react'
import style from "../banner/hero-banner.module.scss"
export const CategoryCard = ({img,title}) => {
  return (
    <div className={style.card}>
        <img className={style.img} src={img} alt="img" />
        <h3 className={style.service_title}>{title}</h3>
    </div>
  )
}
