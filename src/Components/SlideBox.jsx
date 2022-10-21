import React from 'react'
import './SlideBox.css'
const SlideBox = () => {
    var sectionStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png")'
      };
  return (
    <div style={{padding: '10px', backgroundColor:'aliceblue', borderRadius:'10px'}}>
    <body className='body'>

<div  style={sectionStyle}></div>

<div style={sectionStyle}></div>
<div style={sectionStyle}></div>
<div style={sectionStyle}></div>
<div style={sectionStyle}></div>
<div style={sectionStyle}></div>

<div className="bg-text">AR News</div>

</body>

</div>
  )
}

export default SlideBox