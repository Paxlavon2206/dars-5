import React from 'react'
import { MainLayout } from '../../layout'
import "../../../src/data/home-data.js"
import { HeroBanner } from '../../components/banner/hero-banner.jsx'
import like from '/like.svg'
import { categoryData, newsData, serviceData } from '../../../src/data/home-data.js'
import { ServiceCard } from '../../components/service/service-card.jsx'
import { CategoryCard } from '../../components/banner/category-card.jsx'
import { NewsCard } from '../../components/banner/news-card.jsx'
import { audioData } from '../../../src/data/home-data.js'


export const Home = () => {
  return (
    <MainLayout>
      <section className="hero">
        <div className="container">
          <div className="hero__container">
            <div className="first__block">
              <h2 className="hero__title">Кўп ўқилаётганлар</h2>
              <div className="hero__banner">
              <HeroBanner/>
              </div>
            </div>
            <div className="second__block">
              <div className="single_card">
                <h3 className="single_title">Китоб ўқишни ёқтирасизми?</h3>
                <p className='single__cap'>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
                <button className='single__btn'>
                 <img src={like} alt="img" />
                 <p className='single_btn_p'>Обуна бўлиш</p>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='service'>
        <div className="container">
          <div className="service__container">
           {serviceData.map((item) => <ServiceCard key={item.name} img={item.Img} title={item.title} cap={item.cap}/>)}
          </div>
        </div>
      </section>
      <section className='category'>
        <div className="container">
          <h2 className='title_ruknlar'>Рукнлар</h2>
          <div className="category_container">
            {categoryData.map((item)=> <CategoryCard img={item.img} title={item.title}/>)}
          </div>
        </div>
      </section>
      <section className='news'>
        <div className="top_content">
        <h2>Янги қўшилганлар</h2>
        </div>
        <div className="news_cards">
        {newsData.map((item)=> <NewsCard key={item.name} img={item.img} title={item.title} info={item.info} rating={item.rating}/>)}
        </div>
      </section>
      <section className='audio'>
        <div className="top_content">
        <h2>Аудио китоблар</h2>
        </div>
        <div className="news_cards">
        {audioData.map((item)=> <NewsCard key={item.name} img={item.img} title={item.title} info={item.info} rating={item.rating}/>)}
        </div>
      </section>

    </MainLayout>
        
  )
}
