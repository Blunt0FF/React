import { connect } from 'react-redux'
import CartItem from './CartItem'

function Cart({ cart }) {
  function sum() {
    let sum = 0
    cart.forEach(item => (sum += item.price * item.quantity))
    return sum
  }

  return (
    <div>
      <h2>KORZINA</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <p>Total Price: {sum()}$€</p>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(Cart)
