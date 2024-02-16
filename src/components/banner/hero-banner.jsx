import React from "react";
import { heroCardData } from "../../data/home-data";
import style from "../banner/hero-banner.module.scss";
export const HeroBanner = () => {
  return (
    <>
      {heroCardData.map((item) => (
        <div className={style.hero__list} key={item.name}>
          <div className={style.hero__item}>
          <img src={item.Img} alt="img" />
          <h4 className={style.title}>{item.name}</h4>
          </div>
        </div>
      ))}
    </>
  );
};
