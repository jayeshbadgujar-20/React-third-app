import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Product = () => {
    return (
        <>
            <div className='container'>Product </div>
            <br></br>
            <input type='search' placeholder='search-product' />
            <nav className='container primary-nav '>
                <Link to="featured" className='a1'>Featured</Link> 
                <Link to="new">New-Product</Link>
            </nav>
            <Outlet>
            
            </Outlet>
        </>
    )
}

export default Product
