import React from 'react'
import '../css/Currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_8BOmFo5sYoizLJhn9FuhHkGw6B0RNfJQ4D5HDcs0&currencies=EUR%2CUSD%2CCAD"

export default function Currency() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setfromCurrency] = useState('USD');
    const [toCurrency, settoCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result1 = (response.data.data[toCurrency]  * amount).toFixed(2);
        setResult(result1);
    }

    return (
        <div className='currency-div'>
            <div style={{ backgroundColor: 'black', color: 'white', fontFamily: 'arial', textAlign: 'center', width: '100%' }}>
                <h3>Çevirici</h3>
            </div>

            <div style={{ marginTop: '25px' }}>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount' />
                <select onChange={(e) => setfromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>TRY</option>
                    <option>EUR</option>
                </select>
                <FaRegArrowAltCircleRight style={{ fontSize: '20px', marginRight: '10px' }} />
                <select onChange={(e) => settoCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />
            </div>

            <div>
                <button
                    onClick={exchange}
                    className='exchange-button'>Çevir</button>
            </div>
        </div>
    )
}

