import React from 'react'
import './PostBody.css'
import axios from 'axios';
import moment from 'moment';

import { useState, useEffect } from "react";
const PostBody = () => {

  const [data, setdata] = useState([])
useEffect(() => {
  const getTrandingNews = ()=>{
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news',
      params: {safeSearch: 'on', textFormat: 'Raw'},
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'a6520c8da0msh46150d8e072a35bp1388d1jsn92387066c6e9',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setdata(response.data.value)

    }).catch(function (error) {
      console.error(error);
    });
  }
  getTrandingNews();
})

  
  
  return (
    <div className="main">

<div style={{display:'flex'}}><h4>Latest News</h4>    </div>


<hr />
{/* <p>Resize the browser window to see the responsive effect.</p> */}


<div className="row">

{data.map(eachPost => (
  <div className="column"key={eachPost?.name}>

<div className="content">
       <img style={{height:'400px', width:'100%'}} src={
              eachPost?.image?.thumbnail?.contentUrl
                .replace("&pid=News", "")
                .replace("pid=News&", "")
                .replace("pid=News", "")
            } alt="" />
       
          <h3 >{eachPost?.name}</h3>
           
          <span>{
              moment(eachPost?.datePublished)
                .format('Do MMMM, h:mm a')
            }</span>
      <p>{eachPost?.description}</p>
    </div>
      
      
  </div>
   ))} 
  </div>

</div>
  )
}

export default PostBody