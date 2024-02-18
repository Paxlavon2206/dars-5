import React from "react";
import style from "../footer/footer.module.scss";
import img1 from "/googleplay.png"
import img2 from "/appstore.png"
import img3 from "/tarmoqlar.svg"
import uzcard from "/uzcard.svg"
import humo from "/humo.svg"
import payme from "/payme.svg"

export const Footer = () => {
  return (
    <>
      <div className={style.footer_container}>
        <footer className="footer">
          <div>
            <div className="container">
              <div className={style.top_footer}>
                <ul className={style.platform}>
                  <h3 className={style.title}>Платформа хақида</h3>
                  <li className={style.item}>
                    <a className={style.link} href="/">
                      Liber ўзи нима?
                    </a>
                  </li>
                  <li className={style.item}>
                    <a className={style.link} href="/">
                      Фойдаланиш шартлари
                    </a>
                  </li>
                  <li className={style.item}>
                    <a className={style.link} href="/">
                      Ёрдам
                    </a>
                  </li>
                </ul>
                <ul className={style.abuna}>
                  <h3 className={style.title}>Обуна хақида</h3>
                  <li  className={style.item}>
                    <a className={style.link} href="/">
                  Обуна бўлиш</a>
                  </li >
                  <li  className={style.item}>
                    <a className={style.link} href="/">Қандай тўлаш</a>
                  </li>
                </ul>
                <ul className={style.kitoblar}>
                  <h3 className={style.title}>Китоблар</h3>
                  <li className={style.item}>
                    <a className={style.link} href="/">Аудио китоблар</a>
                  </li>
                  <li className={style.item}>
                    <a className={style.link} href="/">Электрон китоблар</a>
                  </li>
                  <li className={style.item}>
                    <a className={style.link} href="/">Китоблар</a>
                  </li>
                </ul>
                <ul className={style.ilova}>
                  <h3 className={style.title}>Мобил илова</h3>
                  <div className={style.google_play}>
                    <img src={img1} alt="img" />
                  </div>
                  <div className={style.app_play}>
                    <img src={img2} alt="img" />
                  </div>
                </ul>
              </div>
              <div className={style.bottom_footer}>
                <div className={style.ijtimoiy}>
                  <h3 className={style.bottom_title}>Ижтимоий тармоқлар</h3>
                  <div className={style.tarmoqlar}>
                  <img src={img3} alt="img" />
                  </div>
                </div>
                <div className={style.boglanish}>
                  <h3 className={style.bottom_title}>Боғланиш</h3>
                 <div className={style.boglanish_p}>
                 <p className={style.tel}>+998 90 253 77 53</p>
                  <p className={style.tel}>support@liber.uz</p>
                 </div>
                </div>
                <div className={style.qabul}>
                  <h3 className={style.bottom_title}>Биз қабул қиламиз</h3>
                  <div className={style.payment}>
                    <img src={uzcard} alt="icon" />
                    <img src={humo} alt="icon" />
                    <img src={payme} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
