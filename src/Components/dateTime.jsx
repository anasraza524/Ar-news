// import React from 'react'
// import { useState, useEffect } from "react";
// import { BsClockHistory  } from "react-icons/bs";
// import { AiTwotoneCalendar  } from "react-icons/ai";


// const dateTime = () => {

//   const [dateState, setDateState] = useState(new Date());
//   useEffect(() => {
//          setInterval(() => setDateState(new Date()), 30000);
//   }, []);
//   return (
    
//             <div className="App">
//             <AiTwotoneCalendar />
//             <p>
//               {' '}
//               {dateState.toLocaleDateString('en-GB', {
//                  day: 'numeric',
//                  month: 'short',
//                  year: 'numeric',
//               })}
//             </p>
//             <BsClockHistory />
//             <p>
//              {dateState.toLocaleString('en-US', {
//                 hour: 'numeric',
//                 minute: 'numeric',
//                 hour12: true,
//             })}
//             </p>
//         </div>
       
//   )
// }

// export default dateTime