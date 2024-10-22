import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link className='link' to="/">Əsas səhifə</Link>
            <Link className='link' to="/about">Hakkımda</Link>
            <Link className='link' to="/products">Məhsullar</Link>
            <Link className='link' to="/contact">Əlaqə</Link>
        </div>
    )
}

export default Header