import React from "react";
import { Search } from "./components/search/search";
import style from "../header/header.module.scss";
import { HeaderRegistarion } from "./components/registration/header-registarion";
import { headerData } from "../../data/home-data";

export const Header = () => {
  return (
   <header>
     <div className="container">
      <div className={style.header__container}>
        <Search />
        <HeaderRegistarion />
      </div>
    </div>
    <div className={style.header__bottom}>
            {headerData.map((item) => <ul className={style.header__list} key={item.path}>
                <li>
                    <a className={style.header_link} href={item.path}>{item.name}</a>
                </li>
            </ul>)}
    </div>
   </header>
  );
};
