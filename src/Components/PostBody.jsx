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
      params: {safeSearch: 'Off', textFormat: 'Raw'},
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
  
})

  
  
  return (
    <div className="main">

<div style={{display:'flex'}}><h4>Latest News</h4>    </div>


<hr />
{/* <p>Resize the browser window to see the responsive effect.</p> */}


<div className="row">

  
  <div className="column">
  
  {data.map(eachPost => (
    <div className="content"key={eachPost?.name}>
      <img src="/w3images/mountains.jpg" alt="Mountains"  />
       
          <h3 >{eachPost?.url}</h3>
           
      <p  >Pulished on 15-45-2021</p>
      <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
    </div>
      
      ))} 
  </div>
   
  </div>

</div>
  )
}

export default PostBody