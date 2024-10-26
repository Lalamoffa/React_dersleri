import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/poductSlice'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';


function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { price, image, title, description } = selectedProduct;
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
       if (count > 0) {
            setCount(count - 1);
        }
    }

    const addBasket = ()=>{
        const payload={
            id:id,
            count:count,
            price:price,
            image:image,
            title:title,
            description
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }


    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '30px' }}>
            <div style={{ marginRight: '100px' }}>
                <img src={image} width={400} height={500} alt="img" />
            </div>
            <div>
                <h1 style={{ fontFamily: 'arial' }}>{title}</h1>
                <p style={{ fontFamily: 'arial', fontSize: '20px' }}>{description}</p>
                <h1 style={{ fontSize: '50px', fontFamily: 'arial', fontWeight: 'bold', color: 'rgb(185, 76, 76)', }}>${price}</h1>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus onClick={increment} style={{ fontSize: '40px', marginRight: '10px', cursor: 'pointer' }} /> <span style={{ fontSize: '35px' }} >{count}</span> <CiCircleMinus onClick={decrement} style={{ fontSize: '40px', marginLeft: '10px', cursor: 'pointer' }} />
                </div>
                <div>
                    <button
                    onClick={addBasket}
                    style={{ marginTop: '25px', border: 'none', padding: "10px", borderRadius: '5px', backgroundColor: 'rgb(185, 76, 76)', color: "#fff", cursor: 'pointer' }}>Sebete Ekle</button>

                </div>
            </div>


        </div>
    )
}

export default ProductDetails