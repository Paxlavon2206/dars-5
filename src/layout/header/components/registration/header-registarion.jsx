import React from 'react'
import style from "../registration/registration.module.scss"
import kirishImg from "/kirish.svg"

export const HeaderRegistarion = () => {
  return (
<>
<div className={style.auth_block}>
  <select className={style.registration} name="registraion" id="registraion">
    <option value="Ўз">Ўз</option>
    <option value="Ru">Ru</option>
    <option value="En">En</option>
  </select>
  <button className={style.btn}>
    <img src={kirishImg} alt="img" />
    <p className={style.btn_p}>Кириш</p>
  </button>
</div>
</>
  )
}
