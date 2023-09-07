import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className='container'>
                <button type="button" class="btn btn-info"
                    onClick={() => navigate('order-summary')}>Place Order</button>

            </section>
            <h1 className='container'>This Is Home Page </h1>
        </>
    )

}

