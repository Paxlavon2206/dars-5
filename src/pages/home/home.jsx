import React from 'react'
import { MainLayout } from '../../layout'
import "../../../src/data/home-data.js"
import { HeroBanner } from '../../components/banner/hero-banner.jsx'



export const Home = () => {
  return (
    <MainLayout>
      <section className="hero">
        <div className="container">
          <div className="hero__container">
            <div className="first__block">
              <h2 className="hero__title">Кўп ўқилаётганлар</h2>
              <HeroBanner/>
            </div>
            <div className="second__block"></div>
          </div>
        </div>
      </section>
    </MainLayout>
        
  )
}
