import React from 'react'
import { useNavigate } from 'react-router-dom'
const OrderSummary = () => {
    const navigate = useNavigate()
    return (
        <>
            <button type="button" class="btn btn-info"
                onClick={() => navigate(-1)}>Back</button>

        </>
    )
}

export default OrderSummary
