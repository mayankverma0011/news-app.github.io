import React from 'react'
import './featchData.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const FeatchData = ({ cat }) => {
  const [data, setMydata] = useState([]);


  useEffect(() => {
    axios.get(
      cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=c7c1210ea09f4e7ba83da8d81e4bd73b`
        : 'https://newsapi.org/v2/top-headlines?country=in&s&apiKey=c7c1210ea09f4e7ba83da8d81e4bd73b'
    )
      .then((res) => {
        setMydata(res.data.articles)
        // console.log(res.data.articles);
      });
  }, [cat])

  return (
    <>
  


      <div  id='main-div'>
       
          {
          data ? data.map((item, index) =>
            <>
              <div id='main'>
                <h3>{item.title}</h3>
                <img src={item.urlToImage} alt='/' />
                <p>{item.content}</p>
                <NavLink target='_blank' to={item.url} id='btn' >View<span id='col'> More</span></NavLink>
              </div>
            </>
          ) : "Loading...."}
        
      </div>

    </>
  )
}

export default FeatchData