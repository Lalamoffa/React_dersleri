import React from 'react'

function Course({course}) {
    const {id,title,description,price,image} = course;

    return (

        <div className='course'>
            <img src={image} width={300} height={150} />
            <h4 className='cours-title'>{title}</h4>
            <h5 className='cours-desc'>{description}</h5>
            <h3 className='cours-price'>{price} AZN</h3>
        </div>
    
  )
}

export default Course