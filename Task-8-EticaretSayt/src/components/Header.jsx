import React from 'react'
import '../css/Header.css'
import { SlBasket } from "react-icons/sl";
import { CiLight } from "react-icons/ci";
import { IoMoonSharp } from "react-icons/io5";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const [theme, setTheme] = useState(false);
    const navigate = useNavigate();

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        }
        else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
            <div onClick={() => navigate('/')} className='flex-row'>
                <img className='logo' src="./src/images/logo.png" alt="logo" />
                <p className='logo-text'>Lala Mammadova</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Axtar' />
                <div >
                    {
                        theme ? <IoMoonSharp className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />
                    }
                    <SlBasket className='icon' />
                </div>
            </div>
        </div>
    )
}
