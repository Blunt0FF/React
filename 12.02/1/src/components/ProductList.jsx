import { connect } from 'react-redux'
import { addToCart } from '../redux/actions'

function ProductList({ products, addToCart }) {
  return (
    <>
      <ul>
        {products?.map(product => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = state => {
  console.log('ProdList', state)
  return {
    products: state.products,
  }
}

const mapDispatchToProps = {
  addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
