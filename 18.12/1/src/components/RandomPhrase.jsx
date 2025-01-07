function RandomPhrase() {
  const phrases = ["It's Wednesday, my dudes", 'Hello World', 'I hate React']
  const rand = Math.floor(Math.random() * phrases.length)
  const phrase = phrases[rand]

  return <p>{phrase}</p>
}

export default RandomPhrase
