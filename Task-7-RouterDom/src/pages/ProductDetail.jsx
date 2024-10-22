import React from 'react'
import { useParams } from 'react-router-dom'
import {products} from  '../data/products'
import Product from '../components/Product';


function ProductDetail() {
    const {id} = useParams();
  return (
    <div>
        <div>Məhsullarin siyahisi</div>
        <hr />
        {
            products && products.map((product)=>{
                if(product.id==id){
                    return(
                        <Product  key={product.id} product={product} />

                    )
                }
            })
        }

    </div>
  )
}

export default ProductDetail