import Greeting from './Greeting'
import ShoppingList from './ShoppingList'
import OrderStatus from './OrderStatus'


function App() {
  const shopping = ['Source', 'Bread','Milk']

  const orders = [
    { orderId: 1, status: 'в пути' },
    { orderId: 2, status: 'обработан' },
    { orderId: 3, status: 'в пути' },
    { orderId: 4, status: 'обработан' },
    { orderId: 5, status: 'в пути' },
    { orderId: 6, status: 'доставлен' },]

    // const 
  // return <Greeting name='Jane'/>
  // return <ShoppingList items={shopping} />
  
    return (
      <ul>
        {orders.map(({orderId, status}) => (
          <OrderStatus key={orderId} orderId={orderId} status={status}/>
        ))}
      </ul>
      )

}

export default App;

// return (
//   <ul>
//     {orders.map(order=>(
//       <OrderStatus 
//       key={order.orderId} 
//       orderId={order.orderId}
//       status={order.status}
//       />
//     ))}
//   </ul>
// )



