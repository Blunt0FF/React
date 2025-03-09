import { Provider } from 'react-redux';
import Counter from './Counter';
import store from '../store';

export default function App() {
  
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Redux Counter</h1>
        <Counter />
      </div>
    </Provider>
  );
}