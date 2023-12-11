import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {
        cartList,
        isOrderPlaced,
        onPlacingOrder,
        isDisabled,
        onSelectPayment,
      } = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      const onClickBtn = () => {
        onPlacingOrder()
      }

      const onChangeInput = () => {
        onSelectPayment()
      }

      return (
        <div className="cart-summary-container">
          <h1 className="order-total-value">
            <span className="order-total-label">Order Total:</span> Rs {total}
            /-
          </h1>
          <p className="total-items">{cartList.length} Items in cart</p>
          <Popup
            modal
            trigger={
              <button type="button" className="checkout-button">
                Checkout
              </button>
            }
            className="popup-content"
          >
            <div className="payment-popup-container">
              <h1 className="modal-heading">Select Payment Method</h1>
              <div className="payment-methods">
                <div className="payment-item">
                  <input
                    type="radio"
                    id="card"
                    name="payment"
                    value="Credit or Debit Card"
                    className="input-element"
                    disabled
                  />
                  <label htmlFor="card" className="input-label">
                    Credit or Debit Card
                  </label>
                </div>
                <div className="payment-item">
                  <input
                    type="radio"
                    id="netBanking"
                    name="payment"
                    value="Net Banking"
                    className="input-element"
                    disabled
                  />
                  <label htmlFor="netBanking" className="input-label">
                    Net Banking
                  </label>
                </div>
                <div className="payment-item" disabled>
                  <input
                    type="radio"
                    id="upi"
                    name="payment"
                    value="UPI"
                    className="input-element"
                    disabled
                  />
                  <label htmlFor="upi" className="input-label">
                    UPI
                  </label>
                </div>
                <div className="payment-item" disabled>
                  <input
                    type="radio"
                    id="wallet"
                    name="payment"
                    value="Wallet"
                    className="input-element"
                    disabled
                  />
                  <label htmlFor="wallet" className="input-label">
                    Wallet
                  </label>
                </div>
                <div className="payment-item">
                  <input
                    type="radio"
                    id="cod"
                    name="payment"
                    value="Cash on Delivery"
                    className="input-element"
                    onChange={onChangeInput}
                  />
                  <label htmlFor="cod" className="input-label">
                    Cash on Delivery
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={onClickBtn}
                disabled={isDisabled}
              >
                Confirm Order
              </button>
              {isOrderPlaced && (
                <p className="order-msg">
                  Your order has been placed successfully
                </p>
              )}
            </div>
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
