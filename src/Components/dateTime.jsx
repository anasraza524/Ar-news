import React from 'react'
import { useState, useEffect } from "react";
import { BsClockHistory  } from "react-icons/bs";
import { AiTwotoneCalendar  } from "react-icons/ai";
import moment from 'moment';

const dateTime = () => {

 const [dateState, setDateState] = useState()
  
// useEffect(() => {
//          setInterval(() => setDateState(new Date()), 30000);
//   }, []);

  return (
    
            <div className="App">
            <AiTwotoneCalendar />
            <p>
            
              {
setDateState( moment(new Date()).format("hh:mm A"))
              }
            </p>
            <BsClockHistory />
            <p>{
            
}</p>
        </div>
       
  )
}

export default dateTime