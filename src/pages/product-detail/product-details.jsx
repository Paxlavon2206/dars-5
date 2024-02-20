import React from 'react'
import { useParams } from 'react-router-dom'
import { audioData, newsData } from '../../data/home-data';
import { MainLayout } from '../../layout';
import style from "../product-detail/product.module.scss"
export const ProductDetails = () => {
  const params = useParams();
  
  const result = newsData.find((obj)=> obj.id ===Number(params.slug))
  const result2 = audioData.find((obj)=> obj.id ===Number(params.slug))

  return (
    <MainLayout>
      {/* <h1>salom</h1> */}
      <div className={style.details_box}>
      {result && <img src={result.img}></img>}
       <div className={style.content_box}>
       {result && <h3>{result.title}</h3>}
       {result && <h4>{result.info}</h4>}
       {result && <p>{result.text}</p>}

       <ul className={style.mini_box}>
        <li>
        {result && <h5 className="mini_title">{result.avtor}</h5>}
        {result && <h4>{result.name}</h4>}

        </li>
        <li>
        {result && <h5>{result.company}</h5>}
        {result && <h4>{result.web}</h4>}
        </li>
        <li>
        {result && <h5>{result.date}</h5>}
        {result && <h4>{result.year}</h4>}
        </li>
       </ul>
      </div>
      {/* {result ? <div>
      </div> : ""} */}
      <div className={style.details_box}>
      </div>
       {result2 && <img src={result2.img}></img>}
       <div className={style.content_box}>
       {result2 && <h3>{result2.title}</h3>}
       {result2 && <h4>{result2.info}</h4>}
       {result2 && <p>{result2.text}</p>}

       <ul className={style.mini_box}>
        <li>
        {result2 && <h5>{result2.avtor}</h5>}
        {result2 && <h4>{result2.name}</h4>}
        </li>
        <li>
        {result2 && <h5>{result2.company}</h5>}
        {result2 && <h4>{result2.web}</h4>}
        </li>
        <li>
        {result2 && <h5>{result2.date}</h5>}
        {result2 && <h4>{result2.year}</h4>}
        </li>
       </ul>
       </div>
      </div>
     
    </MainLayout>
  )
}
