import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { fetchData } from './redux/thunks';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data)
  const error = useSelector(state => state.data.error)
  const status = useSelector(state => state.data.status)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className="App">
      <h1>RTK with Axios and Async Thunks</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'success' && (
        <ul>
          {data.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      )}
      {status === 'failed' && <p>Error: {error}</p>}
    </div>
  )
}

export default App
