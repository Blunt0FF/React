import { useEffect, useState } from 'react';
import DataContext from '../context/DataContext';
import axios from 'axios';

export default function DataProvider({ children }) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(res.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}