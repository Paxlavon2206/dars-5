import React from 'react'
import style from "../service/service.module.scss"

export const ServiceCard = ({img,title,cap}) => {
  return (
    <div className={style.card}>
        <div className="img_block">
            <img className={style.img} src={img} alt="img" />
        </div>
        <div className="content">
            <h3 className={style.title}>{title}</h3>
            <p className={style.cap}>{cap}</p>
        </div>
    </div>
  )
}
