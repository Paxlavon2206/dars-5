import React from 'react'
import style from "../search/search.module.scss"
import logo from "/header-logo.svg"


export const Search = () => {
  return (
    <div className={style.search_block}>
        <div className={style.logo}>
            <img src={logo} alt="logo" />
        </div>
        <div className={style.search_mini_block}>
        <select className={style.select} name="select" id="select">
            <option className={style.option} value="Рукнлар">Рукнлар</option>
        </select>
      
       <input className={style.search_input} type="text" name="search" id="input_search" placeholder='Қидириш' />
        </div>

    </div>
  )
}
