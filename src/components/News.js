import React, { useState, useEffect } from 'react'
import Card from './Card'
import './Card.css'

const News = () => {

    const API_KEY = '09ccb245d16b4836af0f2802cdaa1b0b';

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true);

const fetchNews = async () =>{
    let data = await fetch(`https://newsapi.org/v2/everything?q= Pakistan AND disaster &apiKey=${API_KEY}`)
    let parsedData = await data.json();
    setNews(parsedData.articles)

}
useEffect(() => {
    fetchNews();
    setLoading(false);
}, [])

if(loading){
  return <h1 style={{color:'black'}}>Loading</h1>
}
  return (
<>

<div className='mainCardPage'>
<h2>News</h2>
<div className='card-container'>
{news.map((element)=>{
return <Card key = {element.url} heading={element.title} details={element.description} link={element.url} image={element.urlToImage?element.urlToImage:"https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg"}/>
})}
</div>
</div>
    </>
  )
}
export default News;
