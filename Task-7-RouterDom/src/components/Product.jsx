
import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Product({product}) {
    const {id, name, price} = product;
    const navigate =  useNavigate();

  return (
    <div style={{marginBottom:'40px', backgroundColor:'lightblue'}}>
        <div>Mehsul</div>
        <h3>Adi: {name}</h3>
        <h3>Qiymeti: {price}</h3>
        <button onClick={()=>navigate("/product-detail/" + id)}>Detaylara bax</button>
    </div>
  )
}
