import { connect } from 'react-redux'
import { removeFromCart, updateCartQuantity } from '../redux/actions'

function CartItem({ item, removeFromCart, updateCartQuantity }) {
  console.log('item', item)

  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <input
        type='number'
        value={item.quantity}
        min='1'
        onChange={e => updateCartQuantity(item.id, Number(e.target.value))}
      />
      <button onClick={() => removeFromCart(item.id)}>X</button>
    </div>
  )
}

const mapDispatchToProps = {
  updateCartQuantity,
  removeFromCart,
}

export default connect(null, mapDispatchToProps)(CartItem)
