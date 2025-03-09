import { connect } from 'react-redux'

// Step 8 -> вызвать Counter c новым count === rerender Counter
function Counter({ count, increment, decrement }) {
  console.log('Rendering Counter component with count:', count);


  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* Step 1 -> click */}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count // Step 7 -> сообщить Counter'у, что state.count изменился
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }), // Step 2 -> dispatch action'а
  decrement: () => dispatch({ type: 'DECREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)






export function CounterNoRedux() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count => count + 1)

  const decrement = () => setCount(count => count - 1)

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
