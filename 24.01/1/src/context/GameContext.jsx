import { createContext, useEffect, useState } from 'react'

const GameContext = createContext(null)

export default function GameProvider({ children }) {
  const [cards, setCards] = useState(generateCards())
  const [turns, setTurns] = useState(0)
  const [matchesLeft, setMatchesLeft] = useState(emojis.length)
  const [flippedCards, setFlippedCards] = useState([])

  // [1, 2, 3, 4, 5, 6, 7, 8] => cards
  // [3, 6] => flippedCards
  // 1 === 3 || 1 === 6 -> false
  // 2 === 3 || 2 === 6 -> false
  // 3 === 3 || 3 === 6 -> true -> 3 стал isMatched
  // 6 === 3 || 6 === 6 -> true -> 6 стал isMatched

  useEffect(() => {
    if (flippedCards.length === 2) {
      setTurns(prevTurns => prevTurns + 1) // dont use increment
      const isMatch = flippedCards[0].emoji === flippedCards[1].emoji

      if (isMatch) {
        setMatchesLeft(prevLeftMatches => prevLeftMatches - 1)
        setCards(
          cards.map(card =>
            card.id === flippedCards[0].id || card.id === flippedCards[1].id
              ? { ...card, isMatched: true }
              : card
          )
        )
        setFlippedCards([])
      } else {
        setTimeout(() => {
          setCards(
            cards.map(card =>
              card.id === flippedCards[0].id || card.id === flippedCards[1].id
                ? { ...card, isFlipped: false }
                : card
            )
          )
        }, 1000)
        setFlippedCards([])
      }
    }
  }, [cards, flippedCards]) // massiv must have

  const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼']

  function generateCards() {
    const duplicated = [...emojis, ...emojis]
    //    ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼']
    //    const obj1={
    //     id: Date.now(),
    //     emoji: emojis[0],
    //     isFlipped: false,
    //     isMatched: false
    //    }
    //   const obj2={
    //     id: Date.now(),
    //     emoji: emojis[1],
    //     isFlipped: false,
    //     isMatched: false
    //    }    ====>
    const newCards = duplicated.map(emoji => ({
      id: Date.now(),
      emoji: emoji,
      isFlipped: false,
      isMatched: false,
    }))

    const randomizeCards = newCards.toSorted(() => Math.random() - 0.5)
    // Как работает .toSorted(). Если колбэк возвращает отрицательное число, то a ставится перед b
    // Если возвращает положительное число, то b ставится перед a
    return randomizeCards
  }

  function handleClick(id) {
    if (flippedCards.includes(id) || flippedCards.length >= 2) {
      return
    }

    setCards(
      cards.map(card => (card.id === id ? { ...card, isFlipped: true } : card))
    )

    setFlippedCards(prevFlip => [...prevFlip, id])
  }

  function reset() {
    setCards(generateCards())
    setTurns(0)
    setFlippedCards([])
    setMatchesLeft(emojis.length)
  }

  return (
    <GameContext.Provider
      value={{ cards, turns, matchesLeft, handleClick, reset }}
    >
      {children}
    </GameContext.Provider>
  )
}

// inkapsulirovanie = umnoe slovo dlya "spryatanno"
