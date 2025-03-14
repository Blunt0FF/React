import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './home.module.css' 

export default function Home() {
  const [catImage, setCatImage] = useState('')
  const [chuckNorrisQuote, setChuckNorrisQuote] = useState('')


  const fetchCatImage = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search')
      setCatImage(response.data[0].url)
    } catch (error) {
      console.error('Error fetching cat image:', error)
    }
  }


  const fetchChuckNorrisQuote = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random')
      setChuckNorrisQuote(response.data.value)
    } catch (error) {
      console.error('Error fetching Chuck Norris quote:', error)
    }
  }


  useEffect(() => {
    fetchCatImage()
    fetchChuckNorrisQuote()
  }, [])

  return (
    <div className={styles.container}>
      <h1>What an amazing site</h1>
      <p>This is my site, and why do you even need the others?</p>

      {catImage && <img src={catImage} alt="Random Cat" className={styles.catImage} />}

      {chuckNorrisQuote && (
        <div className={styles.quoteBox}>
          <h2>Chuck Norris Quote</h2>
          <p>{chuckNorrisQuote}</p>
        </div>
      )}

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={fetchCatImage}>Get New Cat Image</button>
        <button className={styles.button} onClick={fetchChuckNorrisQuote}>Get New Quote</button>
      </div>
    </div>
  ) }