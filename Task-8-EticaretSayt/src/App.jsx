import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, setDrawer , updateProducts } from './redux/slices/basketSlice'

function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  
  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    dispatch(updateProducts(updatedProducts)); 
  };


  useEffect(()=>{
    dispatch(calculateBasket());
  },[])

  return (
    <div>
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />
        <Drawer anchor='right' open={drawer} onClose={() => dispatch(setDrawer())}>
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: '20px' }}>
                    <img style={{ marginRight: '10px' }} src={product.image} width={50} height={50} />
                    <p style={{ width: '130px', marginRight: '15px' }}>{product.title}</p> <p style={{ color: 'red', fontWeight: 'bold', marginRight: '15px' }}>({product.count}) ədəd</p>
                    <p style={{ fontWeight: 'bold', fontSize: '20px', width: "100px", marginRight: '3px' }}>{product.price} AZN</p>
                    <div>
                      <button  onClick={() => handleDelete(product.id)} style={{ border: 'none', borderRadius: '5px', padding: '8px', fontWeight: 'bold', color: '#fff', backgroundColor: 'red', cursor: 'pointer' }}>Sil</button>
                    </div>
                  </div>

                </div>
              )
            })
          }

          <div>
            <p style={{textAlign:"center"}}>Toplam: {totalAmount} </p>
          </div>

        </Drawer>
      </PageContainer>
    </div >
  )
}

export default App