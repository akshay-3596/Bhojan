import React, { useContext } from 'react'
import './place-order.css'
import { StoreContext } from '../../context/storeContext'
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address'className='m'  />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='street' />
        </div>
        <div className="multi-fields">
        <input type="text" placeholder='State' />
          <input type="text" placeholder='pin-code' />
        </div>
        <input type="text" placeholder='Country' />
        <input type="text" placeholder='phone' className='phone' />
      </div>
      <div className='place-order-right'>
        <div className="cart-total">
          <h2>cart-total</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>&#x20b9;{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>&#x20b9;{getTotalCartAmount()===0?0:20}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>&#x20b9;{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
