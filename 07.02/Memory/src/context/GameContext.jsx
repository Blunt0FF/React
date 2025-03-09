import { createContext, useState } from 'react';

export const GameContext = createContext(null);

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

export function GameProvider({ children }) {
  const [cards, setCards] = useState(generateCards());
  const [turns, setTurns] = useState(0);
  const [matchesLeft, setMatchesLeft] = useState(emojis.length);
  const [flippedCards, setFlippedCards] = useState([]);
  const [win, setWin] = useState(false);

  function handleClick(id) {
    if (flippedCards.includes(id) || flippedCards.length >= 2 || cards.find(card => card.id === id).isMatched) {
      return;
    }

    const clickedCard = cards.find(card => card.id === id);

    setCards(prevCards =>
      prevCards.map(card => (card.id === id ? { ...card, isFlipped: true } : card))
    );

    setFlippedCards(prevFlipped => {
      const newFlipped = [...prevFlipped, clickedCard];

      if (newFlipped.length === 2) {
        const firstCard = newFlipped[0];
        const secondCard = clickedCard;

        setTurns(prev => prev + 1);

        if (firstCard.emoji === secondCard.emoji) {
          setTimeout(() => {
            setCards(prevCards =>
              prevCards.map(card =>
                card.id === firstCard.id || card.id === secondCard.id
                  ? { ...card, isMatched: true }
                  : card
              )
            );
            setMatchesLeft(prev => prev - 1);
            setFlippedCards([]);

            if (matchesLeft === 1) {
              setWin(true);
            }
          }, 500);
        } else {
          setTimeout(() => {
            setCards(prevCards =>
              prevCards.map(card =>
                card.id === firstCard.id || card.id === secondCard.id
                  ? { ...card, isFlipped: false }
                  : card
              )
            );
            setFlippedCards([]);
          }, 1000);
        }
      }
      return newFlipped;
    });
  }

  function generateCards() {
    const duplicated = [...emojis, ...emojis];
    const newCards = duplicated.map(emoji => ({
      id: Math.random(),
      emoji: emoji,
      isFlipped: false,
      isMatched: false,
    }));

    return newCards.toSorted(() => Math.random() - 0.5);
  }

  function reset() {
    setCards(generateCards());
    setTurns(0);
    setFlippedCards([]);
    setMatchesLeft(emojis.length);
    setWin(false);
  }

  return (
    <GameContext.Provider
      value={{ cards, turns, matchesLeft, handleClick, reset, win }}
    >
      {children}
    </GameContext.Provider>
  );
}

// inkapsulirovanie = umnoe slovo dlya "spryatanno"
