import React from 'react'

const Card = (data) => {
  
  return (
    <div className='card'>
        <img src={data.img} alt="" />
        <h1>{data.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quasi!</p>
        <button>Follow</button>
      
    </div>
  )
}

export default Card
