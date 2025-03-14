import React, { useState, useEffect } from 'react';
import styles from './List.module.css';

export default function List() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRandomFacts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
      const data = await response.json();
      setFacts((prevFacts) => [...prevFacts, data.text]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching facts: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      fetchRandomFacts();
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1>Random List of Facts</h1>
      {loading && <p>Loading facts...</p>}
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}